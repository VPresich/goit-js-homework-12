function getScrollingParam() {
  const gap = 24;
  const gallery = document.querySelector('.gallery');

  const galleryRect = gallery.getBoundingClientRect();
  const clientGalleryHeight = galleryRect.height;

  const cardRect = document
    .querySelector('.gallery li')
    .getBoundingClientRect();
  const cardHeight = cardRect.height;
  const nScrolls =
    Math.round(clientGalleryHeight + gap) / (cardHeight + gap) / 2;
  return {
    scrollH: cardHeight + gap,
    nScrolls,
  };
}

function scrollingDown(nElem) {
  const { firstScrollH, scrollH, nScrolls } = getScrollingParam();

  for (let i = 0; i < nScrolls; i++) {
    setTimeout(() => {
      window.scrollBy({
        top: scrollH * nElem * (i + 1),
        left: 0,
        behavior: 'smooth',
      });
    }, 1000 * i);
  }
}

export default scrollingDown;
