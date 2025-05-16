export default function decorate(block) {
  const [quoteWrapper] = block.children;

  // ✅ Wrap quote text in <blockquote>
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  // ✅ Optional: wrap author in <p> or <cite> if needed
  // const author = authorWrapper?.textContent?.trim();
  // const authorEl = document.createElement('p');
  // authorEl.textContent = author;
  // authorWrapper.replaceChildren(authorEl);

  // ✅ Get metadata from block
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

  // ✅ Add both styles to the outer block
  block.classList.add(...[bg, border].filter(Boolean));
}
