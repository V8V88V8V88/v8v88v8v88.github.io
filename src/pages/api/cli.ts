export function GET() {
  const R = '\x1b[0m';
  const B = '\x1b[1m';
  const D = '\x1b[2m';
  const I = '\x1b[3m';
  const g = '\x1b[38;2;29;185;84m';
  const w = '\x1b[38;2;255;255;255m';
  const s = '\x1b[38;2;108;108;108m';
  const ds = '\x1b[38;2;40;40;40m';

  const BOX_TL = '\u256D';
  const BOX_TR = '\u256E';
  const BOX_BL = '\u2570';
  const BOX_BR = '\u256F';
  const BOX_V  = '\u2502';
  const BOX_H  = '\u2500';
  const DOT    = '\u00B7';

  const IW = 50;
  const hLine = BOX_H.repeat(IW);
  const hSep = BOX_H.repeat(IW - 6);

  const row = (text: string, vLen: number) =>
    `${g}  ${BOX_V}${R}   ${text}${' '.repeat(IW - 3 - vLen)}${g}${BOX_V}${R}`;

  const center = (text: string, vLen: number) => {
    const lp = Math.floor((IW - vLen) / 2);
    return `${g}  ${BOX_V}${R}${' '.repeat(lp)}${text}${' '.repeat(IW - lp - vLen)}${g}${BOX_V}${R}`;
  };

  const blank = `${g}  ${BOX_V}${R}${' '.repeat(IW)}${g}${BOX_V}${R}`;
  const sep = `${g}  ${BOX_V}${R}   ${ds}${hSep}${R}   ${g}${BOX_V}${R}`;
  const top = `${g}  ${BOX_TL}${hLine}${BOX_TR}${R}`;
  const bot = `${g}  ${BOX_BL}${hLine}${BOX_BR}${R}`;

  const tag = (label: string) => `${g}[${w}${label}${g}]${R}`;
  const LOGO_PAD_LEFT = '   ';
  const logo = `${g}${B}██╗   ██╗ █████╗ 
██║   ██║██╔══██╗
██║   ██║╚█████╔╝
╚██╗ ██╔╝██╔══██╗
 ╚████╔╝ ╚█████╔╝
  ╚═══╝   ╚════╝ 
                 ${R}`
    .split('\n')
    .map((line) => `${LOGO_PAD_LEFT}${line}`)
    .join('\n');

  const card = [
    top,
    blank,
    row(`${w}${B}Vaibhav Pratap Singh${R}`, 20),
    row(`${s}Developer ${D}${DOT}${R} ${s}CS Student ${D}${DOT}${R} ${s}CEH Certified${R}`, 38),
    blank,
    sep,
    blank,
    row(`${g}${B}~ about${R}`, 7),
    blank,
    row(`${w}Hey, I am Vaibhav aka ${g}${B}V8${R}`, 24),
    row(`${w}I am a dev from India who loves computers.${R}`, 42),
    blank,
    row(`${w}${I}and you're seeing all this on terminal.${R}`, 39),
    row(`${s}${I}(preety cool right?)${R}`, 20),
    blank,
    sep,
    blank,
    row(`${g}${B}~ skills${R}`, 8),
    blank,
    row(`${tag('Linux')} ${tag('FOSS')} ${tag('Low-level Programming')}`, 38),
    row(`${tag('Full-stack')} ${tag('Visual Design')} ${tag('CyberSec')}`, 39),
    blank,
    sep,
    blank,
    row(`${g}${B}~ connect${R}`, 9),
    blank,
    row(`${s}email${R}       ${g}v8v88v8v88@protonmail.com${R}`, 37),
    row(`${s}github${R}      ${g}github.com/v8v88v8v88${R}`, 33),
    row(`${s}twitter${R}     ${g}x.com/v8v88v8v88${R}`, 28),
    row(`${s}telegram${R}    ${g}t.me/V8V88V8V88${R}`, 27),
    row(`${s}linkedin${R}    ${g}linkedin.com/in/v8v88v8v88${R}`, 38),
    blank,
    center(`${g}${B}v8v88v8v88.com${R}`, 14),
    blank,
    bot,
  ].join('\n');

  return new Response(`\n${logo}\n${card}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
