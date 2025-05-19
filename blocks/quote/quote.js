export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  // ✅ Extract metadata and apply styles
  try {
    const meta = block.dataset?.json;
    if (meta) {
      const config = JSON.parse(meta);
      const bg = config.bgClass || '';
      const border = config.borderClass || '';
      block.classList.add(...[bg, border].filter(Boolean));
    }
  } catch (e) {
    console.warn('Could not parse block metadata:', e);
  }
}
