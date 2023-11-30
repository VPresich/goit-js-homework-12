async function scrollingDown() {
  const cards = document.querySelectorAll('.gallery li');
  if (cards.length === 0) return;
  try {
    window.scroll({ top: 0, left: 0 });
    const gallery = document.querySelector('.gallery');
    const cardHeight = gallery.firstChild.getBoundingClientRect().height;
    const offset = 48;
    window.scrollBy({
      top: gallery.getBoundingClientRect().top + offset,
      behavior: 'smooth',
    });

    let targetPosition = gallery.getBoundingClientRect().top + offset;

    while (
      targetPosition <
      gallery.getBoundingClientRect().bottom - cardHeight - offset
    ) {
      targetPosition += cardHeight + offset;
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.scrollBy({
        top: targetPosition,
        left: 0,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export default scrollingDown;
