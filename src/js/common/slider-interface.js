import Slider from './slider.js';

class SliderInterface {
  static touchThreshold = 75;
  #touchStartX = 0;
  #sliderRef;
  #prevBtn;
  #nextBtn;
  #sliderDots;
  #slidesCounter;
  #sliderContent;
  #dotDefaultClass;
  #dotActiveClass;
  #isDotContainText;

  constructor({
    currentSlide,
    slidesPerPage,
    prevBtnId,
    nextBtnId,
    dotsContainerId = '',
    sliderContainerId = '',
    slidesCounterId = '',
    dotDefaultClass = 'slider-dot',
    dotActiveClass = 'active-dot',
    isDotContainText = false,
    elementsListLength,
  }) {
    this.#sliderRef = new Slider(
      currentSlide,
      slidesPerPage,
      elementsListLength
    );

    if (prevBtnId) this.#prevBtn = document.getElementById(prevBtnId);
    if (nextBtnId) this.#nextBtn = document.getElementById(nextBtnId);

    if (dotsContainerId) {
      this.#sliderDots = document.getElementById(dotsContainerId);
      this.#dotDefaultClass = dotDefaultClass;
      this.#dotActiveClass = dotActiveClass;
      this.#isDotContainText = isDotContainText;
    }

    if (sliderContainerId)
      this.#sliderContent = document.getElementById(sliderContainerId);

    if (slidesCounterId)
      this.#slidesCounter = document.getElementById(slidesCounterId);

    this.init();
  }

  init() {
    this.initBtnsFunction();
    this.#sliderContent && this.initTouchFunction();
    this.#sliderDots && this.createDots();
  }

  update() {
    this.updateContent();
    this.updateButtons();
    this.#sliderDots && this.updateDisplayDots();
    this.#slidesCounter && this.updateCounter();
  }

  refresh() {
    this.#sliderRef.refresh();
    if (this.#slidesCounter) this.#slidesCounter.textContent = '';
    if (this.#sliderDots.innerHTML) this.#sliderDots.innerHTML = '';
  }

  destroy() {
    this.removeBtnsFunction();
    this.#sliderDots && this.removeDots();
    this.#sliderContent && this.removeTouchFunction();
  }

  getCurrentSlide() {
    return this.#sliderRef.currentSlide;
  }

  getSlidesNumber() {
    return this.#sliderRef.slidesNumber;
  }

  initBtnsFunction() {
    this.#prevBtn &&
      this.#prevBtn.addEventListener('click', this.onPrevBtnClick.bind(this));
    this.#nextBtn &&
      this.#nextBtn.addEventListener('click', this.onNextBtnClick.bind(this));
  }

  initTouchFunction() {
    this.#touchStartX = 0;
    this.#sliderContent.addEventListener(
      'touchstart',
      this.onSliderTouchStart.bind(this)
    );

    this.#sliderContent.addEventListener(
      'touchmove',
      this.onSliderTouchMove.bind(this)
    );
  }

  createDots() {
    this.#sliderDots.innerHTML = '';
    for (let ind = 0; ind < this.#sliderRef.slidesNumber; ind += 1) {
      const dot = document.createElement('li');
      dot.className = this.#dotDefaultClass;
      dot.dataset.index = ind;
      if (this.#isDotContainText) dot.textContent = `${ind + 1}`;
      this.#sliderDots.appendChild(dot);
    }

    this.#sliderDots.addEventListener(
      'click',
      this.onSliderDotsClick.bind(this)
    );
  }

  updateContent() {
    console.log(TODO in children);
  }

  updateButtons() {
    this.#prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.#nextBtn.disabled = this.#sliderRef.isExistNext();
    this.#prevBtn.style.display =
      this.#sliderRef.slidesNumber > 0 ? 'flex' : 'none';
    this.#nextBtn.style.display =
      this.#sliderRef.slidesNumber > 0 ? 'flex' : 'none';
  }

  updateDisplayDots() {
    const children = this.#sliderDots.children;
    for (let i = 0; i < children.length; i += 1) {
      if (i === this.#sliderRef.currentSlide) {
        children[i].classList.add(this.#dotActiveClass);
        children[i].style.display = 'flex';
      } else {
        children[i].classList.remove(this.#dotActiveClass);
        children[i].style.display = window.innerWidth <= 375 ? 'none' : '';
      }
    }
  }

  updateCounter() {
    this.#slidesCounter.textContent = `${
      this.#sliderRef.currentSlide + 1 + '/' + this.#sliderRef.slidesNumber
    }`;
  }

  removeBtnsFunction() {
    this.#prevBtn &&
      this.#prevBtn.removeEventListener(
        'click',
        this.onPrevBtnClick.bind(this)
      );
    this.#nextBtn &&
      this.#nextBtn.removeEventListener(
        'click',
        this.onNextBtnClick.bind(this)
      );
  }

  removeDots() {
    this.#sliderDots.innerHTML = '';
    this.#sliderDots.removeEventListener(
      'click',
      this.onSliderDotsClick.bind(this)
    );
  }

  removeTouchFunction() {
    this.#sliderContent.removeEventListener(
      'touchstart',
      this.onSliderTouchStart.bind(this)
    );

    this.#sliderContent.removeEventListener(
      'touchmove',
      this.onSliderTouchMove.bind(this)
    );
  }

  onPrevBtnClick() {
    this.#sliderRef.onPrevSlide();
    this.update();
  }

  onNextBtnClick() {
    this.#sliderRef.onNextSlide();
    this.update();
  }

  onSliderDotsClick(event) {
    const dot = event.target;
    if (dot.classList.contains(this.#dotDefaultClass)) {
      const index = parseInt(dot.dataset.index, 10);
      this.#sliderRef.goToSlide(index);
      this.update();
    }
  }

  onSliderTouchStart(event) {
    this.#touchStartX = event.touches[0].clientX;
  }

  onSliderTouchMove(event) {
    const currentX = event.touches[0].clientX;
    const deltaX = this.#touchStartX - currentX;

    if (deltaX > SliderInterface.touchThreshold) {
      this.#sliderRef.onNextSlide();
      this.#touchStartX = currentX;
      this.update();
    } else {
      if (deltaX < -SliderInterface.touchThreshold) {
        this.#sliderRef.onPrevSlide();
        this.#touchStartX = currentX;
        this.update();
      }
    }
  }

  addDot() {
    const dot = document.createElement('li');
    dot.className = this.#dotDefaultClass;
    const currIndex = this.getSlidesNumber();
    dot.dataset.index = currIndex;
    if (this.#isDotContainText) dot.textContent = `${currIndex + 1}`;
    this.#sliderDots.appendChild(dot);
  }

  addNewPage() {
    this.addDot();
    const lastSlider = this.#sliderRef.slidesNumber + 1;
    this.#sliderRef.slidesNumber = lastSlider;
    this.#sliderRef.goToSlide(lastSlider - 1);
    this.update();
  }
}

export default SliderInterface;
