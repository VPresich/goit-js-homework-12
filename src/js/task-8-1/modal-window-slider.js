import SliderInterface from '../common/slider-interface.js';
import { DEFAULT_URL, DEFAULT_ALT } from '../common/constants';
import loadImage from '../common/load-image.js';
class ModalWindowSlider extends SliderInterface {
  #sliderContent;
  #elementsList;
  #loader;
  constructor(params) {
    const { elementsList, sliderContent } = params;
    super(params);
    this.#elementsList = elementsList;
    this.#sliderContent = sliderContent;
    this.#loader = document.querySelector('.border-loader-modal-window');
    this.#loader.style.display = 'block';
    this.update();
  }

  destroy() {
    super.destroy();
    this.deleteImage();
  }

  async updateContent() {
    this.#loader.style.display = 'block';
    document.body.style.cursor = 'none';

    const slideNumber = super.getCurrentSlide();
    const imgRef = this.#elementsList[slideNumber].querySelector('img');
    const aRef = this.#elementsList[slideNumber].querySelector('a');

    const sourceImg = imgRef.dataset.source
      ? imgRef.dataset.source
      : aRef.href
      ? aRef.href
      : imgRef.src;

    try {
      const loadedImage = await loadImage(sourceImg);
      this.#sliderContent.src = loadedImage.src;
      this.#sliderContent.alt = imgRef.alt;
    } catch (error) {
      this.#sliderContent.src = DEFAULT_URL;
      this.#sliderContent.alt = DEFAULT_ALT;
      console.log(error);
    } finally {
      this.#loader.style.display = 'none';
      document.body.style.cursor = 'default';
    }
  }

  deleteImage() {
    this.#sliderContent.src = '';
    this.#sliderContent.alt = '';
  }
}
export default ModalWindowSlider;
