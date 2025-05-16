export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  // ✅ Fetch metadata (block config values)
  const meta = block.dataset?.json;
  let bg = '';
  let border = '';

  try {
    const config = JSON.parse(meta);
    bg = config.bgClass || '';
    border = config.borderClass || '';
  } catch (e) {
    console.warn('Could not parse block metadata:', e);
  }

  // ✅ Apply styles to block or inner elements
  block.classList.add(...[bg, border].filter(Boolean));
}
