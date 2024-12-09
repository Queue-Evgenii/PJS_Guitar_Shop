import { defaultOptions } from "./options.js";
import { setupNavigationHandler } from "./navigation.js";
import { setupSwipeHandler } from "./swipe.js";

export const setupSlider = (options = {}) => {
  options = mergeOptions(options);

  const slider = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slider-slide');
  const prevBtn = document.querySelector('.slider-prev-btn');
  const nextBtn = document.querySelector('.slider-next-btn');

  let currentIndex = 0;
  const slideWidth = calculateSlideWidth(options.slidePerView);

  applySlideStyles(slides, slideWidth);

  if (options.navigation) {
    setupNavigationHandler(prevBtn, nextBtn, {
      slider,
      slides,
      slideWidth,
      options,
      currentIndex: () => currentIndex,
      setCurrentIndex: (index) => { currentIndex = index; },
    });
  } else {
    prevBtn.style = nextBtn.style = "display: none;"
  }
  
  if (options.swipe) {
    slider.classList.add("_slider-grab")
    setupSwipeHandler({
      slider,
      slides,
      slideWidth,
      options,
      currentIndex: () => currentIndex,
      setCurrentIndex: (index) => { currentIndex = index; },
    });
  }
};

const mergeOptions = (options) => {
  return { ...defaultOptions, ...options };
}

/**
 * Calculates width of single slide.
 * @param {number} slidePerView Quantity of visible slides.
 * @returns {number} Width of single slide in percents.
 */
const calculateSlideWidth = (slidePerView) => {
  return 100 / slidePerView;
}

/**
 * Styles setup for each slide.
 * @param {NodeListOf<HTMLElement>} slides Slides node list.
 * @param {number} slideWidth Width of single slide.
 */
const applySlideStyles = (slides, slideWidth) => {
  slides.forEach(slide => {
    slide.style.flex = `0 0 ${slideWidth}%`;
  });
}