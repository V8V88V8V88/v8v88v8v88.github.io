const SKIP_ATTRS = new Set(['xmlns', 'viewBox', 'class', 'width', 'height', 'focusable']);

export function createSvgSprite(prefix = 'svg-') {
  const ids = new Map<string, string>();
  const symbols: string[] = [];

  return {
    ref(svg: string): string {
      const match = svg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/);
      const viewBox = match?.[1].match(/viewBox="([^"]+)"/)?.[1];
      if (!match || !viewBox) return svg;
      let id = ids.get(svg);
      if (!id) {
        id = `${prefix}${ids.size}`;
        ids.set(svg, id);
        const attrs = [...match[1].matchAll(/\s([\w:-]+)="([^"]*)"/g)]
          .filter(([, name]) => !SKIP_ATTRS.has(name) && !name.startsWith('aria-'))
          .map(([attr]) => attr)
          .join('');
        symbols.push(`<symbol id="${id}" viewBox="${viewBox}"${attrs}>${match[2]}</symbol>`);
      }
      return `<svg viewBox="${viewBox}" aria-hidden="true" focusable="false"><use href="#${id}"/></svg>`;
    },
    render(): string {
      return `<svg aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">${symbols.join('')}</svg>`;
    },
  };
}
