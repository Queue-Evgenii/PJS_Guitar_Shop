import { updateSliderPosition } from "./position.js";

/**
 * Setups handlers for navigation buttons.
 * @param {HTMLElement} prevBtn "Previous slide" button node.
 * @param {HTMLElement} nextBtn "Next slide" button node.
 * @param {Object} context Slider context.
 */
export const setupNavigationHandler = (
  prevBtn,
  nextBtn,
  {
    slider,
    slides,
    slideWidth,
    options,
    currentIndex,
    setCurrentIndex
  }
) => {
  if (options.slidePerView <= 0 || options.slidePerView >= slides.length) {
    prevBtn.style = nextBtn.style = "display: none;"
    return;
  }

  prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex() === 0)
      ? slides.length - options.slidePerView
      : currentIndex() - 1;

    setCurrentIndex(newIndex);
    updateSliderPosition(slider, newIndex, slideWidth);
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex() >= slides.length - options.slidePerView)
      ? 0
      : currentIndex() + 1;

    setCurrentIndex(newIndex);
    updateSliderPosition(slider, newIndex, slideWidth);
  });
}