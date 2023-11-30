import SliderInterface from './slider-interface.js';
import { createErrMsg } from '../common/create-msg.js';
import { DEF_ELEMENT_PERPAGE } from '../common/constants.js';

class GalleryPagination extends SliderInterface {
  #elementsPerPage = DEF_ELEMENT_PERPAGE;
  #data;
  #fnUpdateMarkUp;
  #ContentRef;
  #fnGetImages;
  #moreBtn;
  #maxPages = 0;
  #searchStr = '';
  #loader;
  #boxRef = null;

  constructor({
    data,
    elementsPerPage,
    contentRef,
    fnCreateMarkup,
    fnGetImages,
    searchStr,
    boxRef,
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
    this.#loader = document.querySelector('.border-loader-pagination');
    this.#searchStr = searchStr;
    this.#boxRef = boxRef;
    this.update();
    this.moreBtnUpdate();
  }

  moreBtnUpdate() {
    this.#moreBtn.style.display = this.#data.length > 0 ? 'block' : 'none';
    if (this.getSlidesNumber() === this.#maxPages) {
      this.#moreBtn.style.display = 'none';
      if (this.#maxPages > 1) {
        createErrMsg(
          "We're sorry, but you've reached the end of search results."
        );
      }
    }
  }

  refresh() {
    super.refresh();
    this.#searchStr = '';
    this.#data = [];
    this.#ContentRef.innerHTML = '';
    this.update();
    this.moreBtnUpdate();
  }

  async updateContent() {
    const slideNumber = super.getCurrentSlide();
    const startElement = slideNumber * this.#elementsPerPage;
    const elements = this.#data.slice(
      startElement,
      startElement + this.#elementsPerPage
    );
    await this.#fnUpdateMarkUp(elements, this.#ContentRef);
    this.#boxRef && this.#boxRef.refresh();
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
    this.#moreBtn.style.visible = 'none';
    this.#fnGetImages(this.#searchStr, nextPage)
      .then(images => {
        this.addData(images.hits, this.#maxPages, this.#searchStr);
      })
      .catch(error => {
        createErrMsg(error);
        this.#moreBtn.style.display = 'none';
      })
      .finally(() => {
        this.#loader.style.display = 'none';
        this.#boxRef && this.#boxRef.refresh();
        this.#moreBtn.style.visible = 'flex';
      });
  }
}

export default GalleryPagination;
