const terminal = document.getElementById('terminal-window');
const header = document.getElementById('terminal-header');
const dockButton = document.getElementById('dock-item-terminal');
const maximizeButton = document.getElementById('btn-maximize');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (terminal && header && dockButton) {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const bounds = (reserveDock = false) => ({ left: 8, top: 68, right: window.innerWidth - 8, bottom: Math.max(180, window.innerHeight - (reserveDock ? 88 : 8)) });
  const available = bounds(true);
  const width = Math.min(860, available.right - available.left);
  const height = Math.min(440, available.bottom - available.top);
  let frame = {
    x: (window.innerWidth - width) / 2,
    y: available.top + (available.bottom - available.top - height) / 2,
    width,
    height,
  };
  let maximized = false;
  let minimized = false;
  let gesture = null;
  let animation = null;

  function fit() {
    const b = bounds();
    frame.width = clamp(frame.width, Math.min(300, b.right - b.left), b.right - b.left);
    frame.height = clamp(frame.height, Math.min(190, b.bottom - b.top), b.bottom - b.top);
    frame.x = clamp(frame.x, b.left, b.right - frame.width);
    frame.y = clamp(frame.y, b.top, b.bottom - frame.height);
  }

  function render() {
    const b = bounds(maximized);
    const rect = maximized ? { x: b.left, y: b.top, width: b.right - b.left, height: b.bottom - b.top } : frame;
    Object.assign(terminal.style, { position: 'fixed', left: `${rect.x}px`, top: `${rect.y}px`, width: `${rect.width}px`, height: `${rect.height}px` });
    terminal.classList.toggle('maximized', maximized);
    maximizeButton.setAttribute('aria-label', maximized ? 'Restore terminal size' : 'Maximize terminal');
    maximizeButton.title = maximized ? 'Restore' : 'Maximize';
  }

  function toggleMaximize() {
    if (minimized || animation || gesture) return;
    maximized = !maximized;
    fit();
    render();
  }

  function setMinimized(next) {
    if (gesture || next === minimized) return;
    if (animation) {
      animation.onfinish = null;
      animation.cancel();
    }
    minimized = next;
    terminal.classList.remove('is-minimized');
    terminal.inert = next;
    terminal.setAttribute('aria-hidden', String(next));
    fit();
    render();
    const rect = terminal.getBoundingClientRect();
    const dock = dockButton.getBoundingClientRect();
    const destination = `translate(${dock.left + dock.width / 2 - rect.left - rect.width / 2}px, ${dock.top + dock.height / 2 - rect.top - rect.height / 2}px) scale(0.06)`;
    const open = { transform: 'translate(0, 0) scale(1)', opacity: 1, filter: 'blur(0px)' };
    const closed = { transform: destination, opacity: 0, filter: 'blur(6px)' };
    terminal.classList.add('is-animating');
    dockButton.dataset.label = next ? 'Restore Terminal' : 'Terminal';
    dockButton.setAttribute('aria-label', next ? 'Restore terminal' : 'Minimize terminal');
    if (next) dockButton.focus({ preventScroll: true });
    animation = terminal.animate(next ? [open, closed] : [closed, open], {
      duration: reducedMotion.matches ? 0 : 360,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'both',
    });
    animation.onfinish = () => {
      terminal.classList.toggle('is-minimized', minimized);
      terminal.classList.remove('is-animating');
      animation.cancel();
      animation = null;
      if (!minimized) document.getElementById('terminal-input').focus({ preventScroll: true });
    };
  }

  function resize(direction, dx, dy, original) {
    const b = bounds();
    const minWidth = Math.min(300, b.right - b.left);
    const minHeight = Math.min(190, b.bottom - b.top);
    let { x, y, width, height } = original;
    const right = x + width;
    const bottom = y + height;
    if (direction.includes('e')) width = clamp(width + dx, minWidth, b.right - x);
    if (direction.includes('s')) height = clamp(height + dy, minHeight, b.bottom - y);
    if (direction.includes('w')) { x = clamp(x + dx, b.left, right - minWidth); width = right - x; }
    if (direction.includes('n')) { y = clamp(y + dy, b.top, bottom - minHeight); height = bottom - y; }
    frame = { x, y, width, height };
  }

  terminal.addEventListener('pointerdown', (event) => {
    const handle = event.target.closest('[data-resize]');
    const titlebar = event.target.closest('#terminal-header');
    if ((!handle && !titlebar) || event.target.closest('.terminal-controls') || event.button !== 0 || !event.isPrimary || maximized || minimized || animation || gesture) return;
    event.preventDefault();
    gesture = { id: event.pointerId, direction: handle?.dataset.resize, x: event.clientX, y: event.clientY, frame: { ...frame } };
    terminal.setPointerCapture(event.pointerId);
    terminal.classList.add(handle ? 'is-resizing' : 'is-dragging');
  });
  terminal.addEventListener('pointermove', (event) => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (gesture.direction) resize(gesture.direction, dx, dy, gesture.frame);
    else { frame.x = gesture.frame.x + dx; frame.y = gesture.frame.y + dy; fit(); }
    render();
  });
  function endGesture() {
    if (!gesture) return;
    const id = gesture.id;
    gesture = null;
    terminal.classList.remove('is-dragging', 'is-resizing');
    if (terminal.hasPointerCapture(id)) terminal.releasePointerCapture(id);
  }
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((name) => terminal.addEventListener(name, endGesture));
  header.addEventListener('dblclick', (event) => {
    if (!event.target.closest('.terminal-controls')) toggleMaximize();
  });
  function keyboardGeometry(event, resizing) {
    if (maximized || minimized || animation || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const step = event.shiftKey ? 40 : 10;
    const dx = event.key === 'ArrowLeft' ? -step : event.key === 'ArrowRight' ? step : 0;
    const dy = event.key === 'ArrowUp' ? -step : event.key === 'ArrowDown' ? step : 0;
    if (resizing) resize('se', dx, dy, frame);
    else { frame.x += dx; frame.y += dy; fit(); }
    render();
  }
  header.addEventListener('keydown', (event) => { if (event.target === header) keyboardGeometry(event, false); });
  document.getElementById('terminal-resize-keyboard').addEventListener('keydown', (event) => keyboardGeometry(event, true));
  document.getElementById('btn-close').addEventListener('click', () => setMinimized(true));
  document.getElementById('btn-minimize').addEventListener('click', () => setMinimized(true));
  maximizeButton.addEventListener('click', toggleMaximize);
  dockButton.addEventListener('click', () => setMinimized(!minimized));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && maximized) toggleMaximize(); });
  window.addEventListener('resize', () => { endGesture(); fit(); render(); });
  fit();
  render();
}
