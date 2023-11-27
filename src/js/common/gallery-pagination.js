import SliderInterface from './slider-interface.js';

class GalleryPagination extends SliderInterface {
  #elementsPerPage = 8;
  #isRequestNeed;
  #data;
  #fnUpdateMarkUp;
  #ContentRef;
  #fnInsertDataToGallary;
  constructor({
    data,
    totalPages,
    elementsPerPage,
    contentRef,
    isRequestNeed,
    fnCreateMarkup,
    fnInsertDataToGallary,
  }) {
    const dataForSliderInterface = {
      indexElement: 0,
      slidesPerPage: 1,
      elementsListLength: totalPages,
      prevBtnId: 'prevPageBtn',
      nextBtnId: 'nextPageBtn',
      dotsContainerId: 'paginationDots',
      dotDefaultClass: 'pagination-dot',
      dotActiveClass: 'active-pagination-dot',
      isDotContainText: true,
      sliderContainerId: '',
    };
    super(dataForSliderInterface);

    this.#data = data;
    this.#fnUpdateMarkUp = fnCreateMarkup;
    this.#fnInsertDataToGallary = fnInsertDataToGallary;
    this.#ContentRef = contentRef;
    this.#isRequestNeed = isRequestNeed;
    this.#elementsPerPage = elementsPerPage;

    super.update();
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();

    if (this.#isRequestNeed) {
      this.#fnInsertDataToGallary(slideNumber + 1);
    } else {
      const startElement = slideNumber * this.#elementsPerPage;
      const elements = this.#data.slice(
        startElement,
        startElement + this.#elementsPerPage
      );
      console.log();
      this.#ContentRef.innerHTML = '';
      const elementsMarkup = this.#fnUpdateMarkUp(elements);
      this.#ContentRef.insertAdjacentHTML('beforeend', elementsMarkup);
    }
  }
}

export default GalleryPagination;
