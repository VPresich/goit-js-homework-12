class Slider {
  #currentSlide;
  #slidesPerPage;
  #slidesNumber;
  #slides;
  constructor(currentSlide, slidesPerPage, slidesNumber) {
    this.#currentSlide = currentSlide;
    this.#slidesPerPage = slidesPerPage;
    this.#slidesNumber = slidesNumber;
    this.#slides = Array.from({ length: slidesNumber }, () => ({
      display: false,
      offset: 0,
    }));
    this.setSlidesProperty();
  }

  set slidesPerPage(newSlidesPerPage) {
    this.#slidesPerPage = newSlidesPerPage;
  }

  get slidesPerPage() {
    return this.#slidesPerPage;
  }

  get currentSlide() {
    return this.#currentSlide;
  }

  set currentSlide(newCurrentSlide) {
    return (this.#currentSlide = newCurrentSlide);
  }

  get slidesNumber() {
    return this.#slidesNumber;
  }

  set slidesNumber(newSlidesNumber) {
    return (this.#slidesNumber = newSlidesNumber);
  }

  setSlidesProperty() {
    this.#slides.forEach((slide, index) => {
      if (
        index >= this.#currentSlide &&
        index < this.#currentSlide + this.#slidesPerPage
      ) {
        slide.display = true;
      } else {
        slide.display = false;
      }
    });
  }

  onPrevSlide() {
    if (this.#currentSlide > 0) {
      this.#currentSlide--;
      this.#slides.forEach((slide, index) => {
        slide.offset += 1;
      });
    }
    this.setSlidesProperty();
  }

  onNextSlide() {
    if (this.#currentSlide < this.#slidesNumber - this.#slidesPerPage) {
      this.#currentSlide += 1;
      this.#slides.forEach((slide, index) => {
        slide.offset -= 1;
      });
    }
    this.setSlidesProperty();
  }

  goToSlide(index) {
    const delta = index - this.#currentSlide;
    if (index <= this.#slidesNumber - this.#slidesPerPage) {
      this.#currentSlide += delta;
      this.#slides.forEach((slide) => {
        slide.offset -= delta;
      });
    }
    this.setSlidesProperty();
  }

  isExistNext() {
    return (
      this.#currentSlide >= this.#slidesNumber - this.#slidesPerPage ||
      this.#slidesNumber <= this.#slidesPerPage
    );
  }

  isExistPrev() {
    return (
      this.#currentSlide === 0 || this.#slidesNumber <= this.#slidesPerPage
    );
  }

  isDisplaySlide(index) {
    return this.#slides[index].display;
  }

  getOffsetSlide(index) {
    return this.#slides[index].offset;
  }
}

export default Slider;
