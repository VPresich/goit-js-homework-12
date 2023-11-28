import SliderInterface from './slider-interface.js';

class GalleryPagination extends SliderInterface {
  #elementsPerPage = 20;
  #data;
  #fnUpdateMarkUp;
  #ContentRef;
  #fnGetImages;
  #moreBtn;
  #maxPages = 0;
  #searchStr = '';
  #loader;

  constructor({
    data,
    isLastPage,
    elementsPerPage,
    contentRef,
    fnCreateMarkup,
    fnGetImages,
    searchStr,
  }) {
    const dataForSliderInterface = {
      currentSlide: 0,
      slidesPerPage: 1,
      elementsListLength: 0,
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
    this.#fnGetImages = fnGetImages;
    this.#ContentRef = contentRef;
    this.#elementsPerPage = elementsPerPage;
    this.#moreBtn = document.getElementById('morePageBtn');
    this.#moreBtn.addEventListener('click', this.onMoreBtnClick.bind(this));
    (this.#loader = document.querySelector('.border-loader-pagination')),
      (this.#searchStr = searchStr);
    this.update();
    this.moreBtnUpdate();
  }

  moreBtnUpdate() {
    this.#moreBtn.style.display = this.#data.length > 0 ? 'block' : 'none';
    this.#moreBtn.disabled = this.getSlidesNumber() == this.#maxPages;
  }

  refresh() {
    super.refresh();
    this.#searchStr = '';
    this.#data = [];
    this.update();
    this.#ContentRef.innerHTML = '';
    this.moreBtnUpdate();
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();
    const startElement = slideNumber * this.#elementsPerPage;
    const elements = this.#data.slice(
      startElement,
      startElement + this.#elementsPerPage
    );
    this.#fnUpdateMarkUp(elements, this.#ContentRef);
  }

  addData(newPageData, maxPages, searchStr) {
    this.#data.push(...newPageData);
    this.#searchStr = searchStr;
    this.#maxPages = maxPages;
    super.addNewPage();
    this.moreBtnUpdate();
  }

  onMoreBtnClick() {
    const nextPage = this.getSlidesNumber() + 1;

    this.#loader.style.display = 'block';
    this.#fnGetImages(this.#searchStr, nextPage)
      .then(images => {
        this.addData(images.hits, this.#maxPages, this.#searchStr);
        this.#loader.style.display = 'none';
      })
      .catch(error => {
        console.log(error);
        this.#loader.style.display = 'none';
      });
  }
}

export default GalleryPagination;
