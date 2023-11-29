import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../../css/layout/simple-lightbox-window.css';
import iconsUrl from '../../img/icons.svg';

import createCardsGallery from '../common/create-cards-gallery.js';
import getImages from '../common/get-images.js';
import { createErrMsg } from '../common/create-msg.js';

import {
  BGR_GALLERY,
  BGR_BODY,
  DEF_ELEMENT_PERPAGE,
} from '../common/constants.js';

import GalleryPagination from '../common/gallery-pagination.js';
import scrollingDown from '../common/window-scrolling.js';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.border-loader');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onSearchFormSubmit);

let searchString = '';

let slBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  nav: true,
  navText: [
    `<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${iconsUrl}#icon-chevron-left"></use>
        </svg>`,
    `<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${iconsUrl}#icon-chevron-right"></use>
        </svg>`,
  ],
  close: true,
  closeText: `
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${iconsUrl}#close-form"></use>
        </svg>`,
  enableKeyboard: true,
  showCounter: true,
  animationSlide: true,
  loop: true,
});

const galleryPagination = new GalleryPagination({
  data: [],
  fnCreateMarkup: createCardsGallery,
  fnGetImages: getImages,
  contentRef: galleryRef,
  elementsPerPage: DEF_ELEMENT_PERPAGE,
  searchStr: searchString,
  boxRef: slBox,
});

function onSearchFormSubmit(event) {
  event.preventDefault();

  loaderRef.style.display = 'block';
  searchString = event.currentTarget.search.value.trim();
  getImages(searchString, 1)
    .then(data => refreshOnSuccess(data))
    .catch(msg => refreshOnError(msg))
    .finally(() => {
      searchForm.search.value = '';
      loaderRef.style.display = 'none';
    });
}

function refreshOnError(msg) {
  galleryRef.style.backgroundColor = BGR_BODY;
  createErrMsg(msg);
  galleryRef.innerHTML = '';
  galleryPagination && galleryPagination.refresh();
  slBox && slBox.refresh();
}

function refreshOnSuccess(data) {
  galleryRef.style.backgroundColor = BGR_GALLERY;
  galleryPagination && galleryPagination.refresh();
  const maxPages = Math.ceil(data.totalHits / DEF_ELEMENT_PERPAGE);
  galleryPagination.addData(data.hits, maxPages, searchString);
  slBox && slBox.refresh();
  window.scroll(0, 0);
  scrollingDown(2);
}
