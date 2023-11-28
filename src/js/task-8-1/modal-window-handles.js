import { KEY_CODE_ESC } from '../common/constants.js';

import ModalWindowSlider from './modal-window-slider.js';

import insertCardsToGallery from '../common/insert-cards-to-gallery.js'; //For callbacks
import createCardsGallery from '../common/create-cards-gallery.js';
import getImages from '../common/get-images.js'; // For promise

import { createErrMsg } from '../common/create-msg.js';
import { BGR_GALLERY, BGR_BODY } from '../common/constants.js';

import GalleryPagination from '../common/gallery-pagination.js';

let searchString = '';
const defaultElementsPerPage = 20;

const refs = {
  gallery: document.querySelector('.gallery'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  buttonClose: document.querySelector('.close-button'),
  modalContent: document.querySelector('.modal-content'),
  modalClose: document.querySelector('#closeBtn'),
  loader: document.querySelector('.border-loader'),
  searchForm: document.querySelector('.search-form'),
};

refs.gallery.addEventListener('click', onGalleryImageClick);
refs.buttonClose.addEventListener('click', onCloseModalWindow);
refs.modalBackdrop.addEventListener('click', onBackdropClick);
refs.modalClose.addEventListener('click', onCloseModalWindow);
refs.searchForm.addEventListener('submit', onSearchFormSubmit);

const galleryPagination = new GalleryPagination({
  data: [],
  fnCreateMarkup: createCardsGallery,
  fnGetImages: getImages,
  isLastPage: false,
  contentRef: refs.gallery,
  elementsPerPage: 20,
  searchStr: searchString,
});

let modalWindowSlider;
const dataForSlider = {
  slidesPerPage: 1,
  prevBtnId: 'prevBtn',
  nextBtnId: 'nextBtn',
  dotsContainerId: 'sliderDots',
  sliderContainerId: 'modalContent',
  slidesCounterId: 'slidesCounter',
  dotDefaultClass: 'slider-dot',
  dotActiveClass: 'active-dot',
  isDotContainText: false,
  sliderContent: refs.modalContent,
};

function onGalleryImageClick(event) {
  event.preventDefault();
  const targetRef = event.target;

  const isImageRef =
    targetRef.classList.contains('card-cover') ||
    targetRef.classList.contains('card-cover-darkened');

  if (!isImageRef) {
    return;
  }

  const closestLi = targetRef.closest('li');
  const listImages = event.currentTarget.children;
  const indexList = Array.from(listImages).indexOf(closestLi);

  modalWindowSlider = new ModalWindowSlider({
    ...dataForSlider,
    currentSlide: indexList,
    elementsList: listImages,
    elementsListLength: listImages.length,
  });

  openModalWindow();
}

function onSearchFormSubmit(event) {
  event.preventDefault();
  searchString = event.currentTarget.search.value.trim();
  refs.loader.style.display = 'block';

  getImages(searchString, 1)
    .then(images => {
      refreshOnSuccess(images);
    })
    .catch(error => {
      refreshOnError(error);
    });
}

function openModalWindow() {
  refs.modalBackdrop.classList.add('is-open');
  window.addEventListener('keydown', onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  refs.modalBackdrop.classList.remove('is-open');
  modalWindowSlider.destroy();
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseModalWindow(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow(event);
  }
}

function refreshOnError(msg) {
  refs.searchForm.search.value = '';
  refs.loader.style.display = 'none';
  //createErrMsg(msg);
  console.log(msg);
  refs.gallery.style.backgroundColor = BGR_BODY;
  galleryPagination && galleryPagination.refresh();
}

function refreshOnSuccess(data) {
  refs.searchForm.search.value = '';
  refs.loader.style.display = 'none';
  refs.gallery.style.backgroundColor = BGR_GALLERY;

  galleryPagination && galleryPagination.refresh();

  const maxPages = Math.ceil(data.totalHits / defaultElementsPerPage);
  console.log(maxPages);
  galleryPagination.addData(data.hits, maxPages, searchString);
}
