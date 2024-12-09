/**
 * Updates slider position.
 * @param {HTMLElement} slider Slider html element.
 * @param {number} currentIndex Current index of slide.
 * @param {number} slideWidth Width of single slide.
 */
export const updateSliderPosition = (slider, currentIndex, slideWidth) => {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}