const terminal = document.getElementById('terminal-window');
const header = document.getElementById('terminal-header');
const dockButton = document.getElementById('dock-item-terminal');
const maximizeButton = document.getElementById('btn-maximize');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (terminal && header && dockButton) {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  // Available viewport space (leaving room for navbar top and dock bottom)
  const availableTop = 64;
  const availableBottom = Math.max(220, window.innerHeight - 90);
  const initialWidth = Math.min(860, Math.max(320, window.innerWidth - 32));
  const initialHeight = Math.min(440, Math.max(260, availableBottom - availableTop));

  let frame = {
    x: Math.round((window.innerWidth - initialWidth) / 2),
    y: Math.round(availableTop + Math.max(0, (availableBottom - availableTop - initialHeight) / 2)),
    width: initialWidth,
    height: initialHeight,
  };

  let maximized = false;
  let minimized = false;
  let gesture = null;
  let animation = null;

  function keepInBounds() {
    const minVisibleX = 80;
    const minX = -(frame.width - minVisibleX);
    const maxX = window.innerWidth - minVisibleX;
    const minY = 56;
    const maxY = window.innerHeight - 44;
    frame.width = clamp(frame.width, Math.min(320, window.innerWidth - 16), window.innerWidth - 16);
    frame.height = clamp(frame.height, Math.min(180, window.innerHeight - 76), window.innerHeight - 76);
    frame.x = clamp(frame.x, minX, maxX);
    frame.y = clamp(frame.y, minY, maxY);
  }

  function render() {
    const rect = maximized
      ? { x: 12, y: 64, width: window.innerWidth - 24, height: Math.max(200, window.innerHeight - 156) }
      : frame;
    Object.assign(terminal.style, {
      position: 'fixed',
      left: `${rect.x}px`,
      top: `${rect.y}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    });
    terminal.classList.toggle('maximized', maximized);
    maximizeButton.setAttribute('aria-label', maximized ? 'Restore terminal size' : 'Maximize terminal');
    maximizeButton.title = maximized ? 'Restore' : 'Maximize';
  }

  function toggleMaximize() {
    if (minimized || animation || gesture) return;
    maximized = !maximized;
    if (!maximized) {
      keepInBounds();
    }
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
    if (!next) {
      keepInBounds();
    }
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
      if (!minimized) {
        const input = document.getElementById('terminal-input');
        if (input) input.focus({ preventScroll: true });
      }
    };
  }

  function resize(direction, dx, dy, original) {
    const minWidth = Math.min(320, window.innerWidth - 16);
    const minHeight = Math.min(180, window.innerHeight - 76);
    const maxWidth = window.innerWidth - 16;
    const maxHeight = window.innerHeight - 76;
    let { x, y, width, height } = original;
    const right = x + width;
    const bottom = y + height;

    if (direction.includes('e')) {
      width = clamp(original.width + dx, minWidth, maxWidth);
    }
    if (direction.includes('s')) {
      height = clamp(original.height + dy, minHeight, maxHeight);
    }
    if (direction.includes('w')) {
      const newWidth = clamp(original.width - dx, minWidth, maxWidth);
      x = right - newWidth;
      width = newWidth;
    }
    if (direction.includes('n')) {
      const newHeight = clamp(original.height - dy, minHeight, maxHeight);
      y = bottom - newHeight;
      height = newHeight;
    }

    frame = { x, y, width, height };
  }

  const cursorMap = {
    n: 'ns-resize',
    s: 'ns-resize',
    e: 'ew-resize',
    w: 'ew-resize',
    ne: 'nesw-resize',
    sw: 'nesw-resize',
    se: 'nwse-resize',
    nw: 'nwse-resize',
  };

  terminal.addEventListener('pointerdown', (event) => {
    const handle = event.target.closest('[data-resize]');
    const titlebar = event.target.closest('#terminal-header');
    if (
      (!handle && !titlebar) ||
      event.target.closest('.terminal-controls') ||
      event.button !== 0 ||
      !event.isPrimary ||
      maximized ||
      minimized ||
      animation ||
      gesture
    )
      return;

    event.preventDefault();
    const direction = handle?.dataset.resize;
    gesture = {
      id: event.pointerId,
      direction,
      x: event.clientX,
      y: event.clientY,
      frame: { ...frame },
    };
    terminal.setPointerCapture(event.pointerId);
    terminal.classList.add(direction ? 'is-resizing' : 'is-dragging');
    if (direction && cursorMap[direction]) {
      document.body.style.cursor = cursorMap[direction];
    } else {
      document.body.style.cursor = 'grabbing';
    }
  });

  terminal.addEventListener('pointermove', (event) => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;

    if (gesture.direction) {
      resize(gesture.direction, dx, dy, gesture.frame);
    } else {
      // Free drag with safe bounds so window is never lost off screen
      const minVisibleX = 80;
      const minX = -(gesture.frame.width - minVisibleX);
      const maxX = window.innerWidth - minVisibleX;
      const minY = 56;
      const maxY = window.innerHeight - 44;
      frame.x = clamp(gesture.frame.x + dx, minX, maxX);
      frame.y = clamp(gesture.frame.y + dy, minY, maxY);
    }
    render();
  });

  function endGesture() {
    if (!gesture) return;
    const id = gesture.id;
    gesture = null;
    terminal.classList.remove('is-dragging', 'is-resizing');
    document.body.style.cursor = '';
    if (terminal.hasPointerCapture(id)) {
      terminal.releasePointerCapture(id);
    }
  }

  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((name) =>
    terminal.addEventListener(name, endGesture)
  );

  header.addEventListener('dblclick', (event) => {
    if (!event.target.closest('.terminal-controls')) toggleMaximize();
  });

  function keyboardGeometry(event, resizing) {
    if (
      maximized ||
      minimized ||
      animation ||
      !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
    )
      return;
    event.preventDefault();
    const step = event.shiftKey ? 40 : 10;
    const dx = event.key === 'ArrowLeft' ? -step : event.key === 'ArrowRight' ? step : 0;
    const dy = event.key === 'ArrowUp' ? -step : event.key === 'ArrowDown' ? step : 0;
    if (resizing) {
      resize('se', dx, dy, frame);
    } else {
      const minVisibleX = 80;
      frame.x = clamp(frame.x + dx, -(frame.width - minVisibleX), window.innerWidth - minVisibleX);
      frame.y = clamp(frame.y + dy, 56, window.innerHeight - 44);
    }
    render();
  }

  header.addEventListener('keydown', (event) => {
    if (event.target === header) keyboardGeometry(event, false);
  });

  const resizeKeyBtn = document.getElementById('terminal-resize-keyboard');
  if (resizeKeyBtn) {
    resizeKeyBtn.addEventListener('keydown', (event) => keyboardGeometry(event, true));
  }

  const btnClose = document.getElementById('btn-close');
  if (btnClose) btnClose.addEventListener('click', () => setMinimized(true));

  const btnMinimize = document.getElementById('btn-minimize');
  if (btnMinimize) btnMinimize.addEventListener('click', () => setMinimized(true));

  maximizeButton.addEventListener('click', toggleMaximize);
  dockButton.addEventListener('click', () => setMinimized(!minimized));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && maximized) toggleMaximize();
  });

  window.addEventListener('resize', () => {
    endGesture();
    keepInBounds();
    render();
  });

  keepInBounds();
  render();
}
