function scrollingDown() {
  const cards = document.querySelectorAll('.gallery li');
  if (cards.length === 0) return;

  const gallery = document.querySelector('.gallery');
  const galleryHeight = gallery.getBoundingClientRect().height;
  const cardHeight = gallery.firstChild.getBoundingClientRect().height;

  const galleryPosition = gallery.getBoundingClientRect().top;
  const offset = 50;

  window.scrollBy({
    top: galleryPosition,
    behavior: 'smooth',
  });

  let scrollNumber = 0;
  let targetPosition = galleryPosition;
  cards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    if (
      cardPosition + offset >= targetPosition + cardHeight &&
      cardPosition < galleryHeight
    ) {
      targetPosition = cardPosition + offset;
      scrollNumber += 1;
      setTimeout(() => {
        window.scrollBy({
          top: cardPosition + offset,
          left: 0,
          behavior: 'smooth',
        });
      }, 1000 * scrollNumber);
    }
  });
}

export default scrollingDown;
