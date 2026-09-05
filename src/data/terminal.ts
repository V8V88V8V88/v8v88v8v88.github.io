const setupRows = [['Name', 'Vaibhav Pratap Singh'], ['OS', 'Fedora Linux'], ['WM', 'niri'], ['Shell', 'fish'], ['Editor', 'Neovim']];
const personalAscii = [
  '██╗   ██╗ █████╗ ',
  '██║   ██║██╔══██╗',
  '██║   ██║╚█████╔╝',
  '╚██╗ ██╔╝██╔══██╗',
  ' ╚████╔╝ ╚█████╔╝',
  '  ╚═══╝   ╚════╝ ',
].join('&#10;');

export const neofetchMarkup = `<div class="neofetch"><pre class="neofetch-logo" aria-hidden="true">${personalAscii}</pre><div class="neofetch-info"><div class="neofetch-user">v8v88v8v88<span>@fedora</span></div><div class="neofetch-rule" aria-hidden="true">──────────────────────</div>${setupRows.map(([label, value]) => `<div class="neofetch-row"><span class="neofetch-label">${label}</span><span>${value}</span></div>`).join('')}<div class="neofetch-palette" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div></div></div>`;
