// The shared player of every motion: it fits the stage (its own size, landscape or portrait) to the
// screen and adds full screen.
//
// - Landscape or a wide window: the stage fills the window, as large as it fits.
// - Full screen: the button at the right of the play bar, the "f" key, or a double tap.
//   When the stage and the screen have different shapes (a landscape stage on a phone held upright),
//   full screen turns the stage sideways so it uses the long side, or locks the screen to
//   landscape where the browser allows it.
// - A browser with no full screen for a page (an iPhone): the page fills the window instead.
//   Inside a frame with no full screen, the button opens the motion in a new tab at its scene.
// - A timer in the play bar counts down the time left ("-0:47"). A tap on it shows the time
//   played and the length ("0:23 / 1:10") instead.
// - A tap on the picture plays or pauses. On a touch screen the play bar is larger.
// A motion loads this file before its own script; the motion keeps its timeline and its keys.

(() => {
  const TOUCH_BAR_HEIGHT_PX = 34;   // the smallest on-screen height of the play bar on a touch screen
  const MAX_BAR_GROW = 2.4;
  const DOUBLE_TAP_MS = 300;

  const root = document.documentElement;
  const stage = document.getElementById('stage');
  const bar = document.getElementById('bar');
  const coarse = matchMedia('(pointer: coarse)');
  const inFrame = window.self !== window.top;

  const ICON = {
    enter: '<svg viewBox="0 0 16 16"><path d="M2 6V2h4v1.5H3.5V6zM10 2h4v4h-1.5V3.5H10zM14 10v4h-4v-1.5h2.5V10zM6 14H2v-4h1.5v2.5H6z"/></svg>',
    exit: '<svg viewBox="0 0 16 16"><path d="M4.5 2H6v4H2V4.5h2.5zM10 2h1.5v2.5H14V6h-4zM14 10v1.5h-2.5V14H10v-4zM2 10h4v4H4.5v-2.5H2z"/></svg>',
  };

  const style = document.createElement('style');
  style.textContent = `
    /* The stage is wider than a phone. Without this, a mobile browser lays the page out wider and zooms out. */
    html, body { width: 100%; height: 100%; overflow: hidden; overscroll-behavior: none; }
    body { position: fixed; inset: 0; touch-action: manipulation; }
    html.pl-full, html.pl-full body { background: #05060a; }
    /* "#bar #...": a motion's own "#bar button { all: unset }" must not undo these. */
    #bar #pl-fs { all: unset; cursor: pointer; flex: none; width: 28px; height: 28px; display: grid; place-items: center; border-radius: 8px; color: #eef1f7; }
    #bar #pl-fs:hover { background: rgba(255, 255, 255, .08); }
    #bar #pl-fs:focus-visible { outline: 2px solid #ff6b2c; }
    #bar #pl-fs svg { width: 16px; height: 16px; fill: currentColor; }
    #stage.pl-touch #bar { right: auto; width: calc(100% / var(--pl-ui, 1)); transform: scale(var(--pl-ui, 1)); transform-origin: 0 100%; opacity: 1; }
    #stage.pl-touch.pl-crowded #dots em { display: none; }
    #pl-hint { all: unset; position: fixed; left: 50%; bottom: max(24px, env(safe-area-inset-bottom)); transform: translateX(-50%); display: none; align-items: center; gap: 10px;
      padding: 14px 22px; border-radius: 999px; border: 1.5px solid #ff6b2c; background: #12161f; color: #eef1f7; cursor: pointer;
      font: 600 16px/1 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; box-shadow: 0 0 28px rgba(255, 107, 44, .3); }
    #pl-hint svg { width: 18px; height: 18px; fill: currentColor; }
    html.pl-upright:not(.pl-full) #pl-hint { display: flex; }
    #bar #pl-time { all: unset; cursor: pointer; flex: none; min-width: 56px; padding: 0 6px; text-align: right; font: 600 12px/28px ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      letter-spacing: .04em; color: #8d97ad; font-variant-numeric: tabular-nums; white-space: nowrap; }
    #bar #pl-time:hover { color: #eef1f7; }
    #bar #pl-time:focus-visible { outline: 2px solid #ff6b2c; border-radius: 6px; }
  `;
  document.head.appendChild(style);

  const timeButton = document.createElement('button');
  timeButton.id = 'pl-time';
  bar.appendChild(timeButton);

  const fsButton = document.createElement('button');
  fsButton.id = 'pl-fs';
  bar.appendChild(fsButton);

  const hint = document.createElement('button');
  hint.id = 'pl-hint';
  hint.innerHTML = ICON.enter + '<span>Full screen</span>';
  document.body.appendChild(hint);

  const nativeElement = () => document.fullscreenElement || document.webkitFullscreenElement || null;
  const canNative = Boolean(root.requestFullscreen || root.webkitRequestFullscreen);
  let filled = false;   // the fallback: the page fills the window, with no browser full screen

  const isFull = () => Boolean(nativeElement()) || filled;

  /** The transform that fits the stage to a window of w x h. Pure. */
  function fitFor(w, h, stageW, stageH, full) {
    const turn = full && (h > w) !== (stageH > stageW);   // shapes differ: use the long side
    const scale = turn ? Math.min(h / stageW, w / stageH) : Math.min(w / stageW, h / stageH);
    return { scale, turn };
  }

  function fit() {
    const full = isFull();
    const { scale, turn } = fitFor(innerWidth, innerHeight, stage.offsetWidth, stage.offsetHeight, full);
    const upright = innerHeight > innerWidth;
    const turnable = upright && stage.offsetWidth > stage.offsetHeight;   // full screen would help
    stage.style.transform = 'translate(-50%, -50%)' + (turn ? ' rotate(90deg)' : '') + ' scale(' + scale + ')';

    const touch = coarse.matches;
    // An upright phone that is not in full screen shows a preview and the large button, so the bar stays small there.
    const grow = touch && !(turnable && !full) ? Math.min(MAX_BAR_GROW, Math.max(1, TOUCH_BAR_HEIGHT_PX / (bar.offsetHeight * scale))) : 1;
    stage.style.setProperty('--pl-ui', grow);
    stage.classList.toggle('pl-touch', touch);
    stage.classList.toggle('pl-crowded', grow > 1.4);

    root.classList.toggle('pl-full', full);
    root.classList.toggle('pl-upright', touch && turnable);
    const label = full ? 'Exit full screen' : 'Full screen';
    fsButton.innerHTML = full ? ICON.exit : ICON.enter;
    fsButton.setAttribute('aria-label', label);
    fsButton.title = label + ' (f)';
  }

  // The timeline, read from the play bar that each motion draws: one dot per scene, its fill is
  // the part of the scene already played. A dot's length is its --w; else the scene's data-dur.
  const dotFills = () => [...document.querySelectorAll('#dots button')].map(b => b.querySelector('i'));
  // Read on use: this file runs before the motion's own script draws the dots.
  const readSceneSeconds = () => {
    const fromDots = [...document.querySelectorAll('#dots button')].map(b => Number(b.style.getPropertyValue('--w')));
    if (fromDots.length && fromDots.every(d => d > 0)) return fromDots;
    return [...stage.querySelectorAll('[data-dur]')].map(s => Number(s.dataset.dur));
  };
  let sceneSeconds = [], totalSeconds = 0;

  /** Seconds played, from the fill of each dot. Pure over its input. */
  const playedSeconds = fractions => fractions.reduce((sum, f, n) => sum + f * (sceneSeconds[n] || 0), 0);
  const fractions = () => dotFills().map(i => (parseFloat(i?.style.width) || 0) / 100);
  const clock = sec => { const t = Math.max(0, Math.round(sec)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };

  let showLeft = true;   // countdown first; a tap shows "played / length"
  function paintTime() {
    // Read the timeline until the motion has drawn its dots; never give up, so the timer cannot vanish.
    if (totalSeconds <= 0) {
      sceneSeconds = readSceneSeconds();
      totalSeconds = sceneSeconds.reduce((a, b) => a + b, 0);
      timeButton.style.visibility = totalSeconds > 0 ? '' : 'hidden';
      if (totalSeconds <= 0) { requestAnimationFrame(paintTime); return; }
    }
    const played = playedSeconds(fractions());
    const text = showLeft ? '-' + clock(totalSeconds - played) : clock(played) + ' / ' + clock(totalSeconds);
    if (timeButton.textContent !== text) timeButton.textContent = text;
    requestAnimationFrame(paintTime);
  }
  timeButton.setAttribute('aria-label', 'Time: tap to switch between time left and time played');
  timeButton.addEventListener('click', () => { showLeft = !showLeft; });

  /** The scene that plays now, as "#<scene>", so a new tab opens at the same place. */
  const currentScene = () => {
    const done = fractions().filter(f => f >= 1).length;
    return '#' + Math.min(sceneSeconds.length || 1, done + 1);
  };

  async function enter() {
    if (canNative) {
      try {
        await (root.requestFullscreen ? root.requestFullscreen({ navigationUI: 'hide' }) : root.webkitRequestFullscreen());
        await screen.orientation?.lock?.('landscape').catch(() => {});
        return;
      } catch { /* refused: fall through */ }
    }
    if (inFrame) { window.open(location.pathname + currentScene(), '_blank', 'noopener'); return; }
    filled = true;
    fit();
  }

  function exit() {
    if (nativeElement()) {
      screen.orientation?.unlock?.();
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    }
    filled = false;
    fit();
  }

  const toggleFull = () => (isFull() ? exit() : enter());

  fsButton.addEventListener('click', toggleFull);
  hint.addEventListener('click', enter);
  document.addEventListener('fullscreenchange', fit);
  document.addEventListener('webkitfullscreenchange', fit);
  addEventListener('resize', fit);
  coarse.addEventListener?.('change', fit);

  addEventListener('keydown', e => {
    if (e.key === 'f' && !e.metaKey && !e.ctrlKey && !e.altKey) toggleFull();
    else if (e.key === 'Escape' && filled) exit();
  });

  // A tap on the picture plays or pauses; a double tap toggles full screen.
  let lastTap = 0, pending = null;
  stage.addEventListener('click', e => {
    if (e.target.closest('#bar, button, a')) return;
    const now = Date.now();
    if (now - lastTap < DOUBLE_TAP_MS) { clearTimeout(pending); lastTap = 0; toggleFull(); return; }
    lastTap = now;
    pending = setTimeout(() => document.getElementById('play')?.click(), DOUBLE_TAP_MS);
  });

  fit();
  requestAnimationFrame(paintTime);
})();
