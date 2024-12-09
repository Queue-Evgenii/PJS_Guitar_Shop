import { updateSliderPosition } from "./position.js";

/**
 * Setup handlers for touch navigation.
 * @param {Object} context Slider context.
 */
export const setupSwipeHandler = (
  {
    slider,
    slides,
    slideWidth,
    options,
    currentIndex,
    setCurrentIndex
  }
) => {
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const startInteraction = (clientX) => {
    startX = clientX;
    isDragging = true;
    slider.style.transition = 'none';
  };

  const moveInteraction = (clientX) => {
    if (!isDragging) return;
    currentX = clientX - startX;
    const translateX = -currentIndex() * slideWidth + (currentX / slider.offsetWidth) * 100;
    slider.style.transform = `translateX(${translateX}%)`;
  };

  const endInteraction = () => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = 'transform 0.5s ease-in-out';

    if (currentX > options.swipeOffset) {
      const newIndex = (currentIndex() === 0)
        ? slides.length - options.slidePerView
        : currentIndex() - 1;

      setCurrentIndex(newIndex);
    } else if (currentX < -options.swipeOffset) {
      const newIndex = (currentIndex() >= slides.length - options.slidePerView)
        ? 0
        : currentIndex() + 1;

      setCurrentIndex(newIndex);
    }

    updateSliderPosition(slider, currentIndex(), slideWidth);
    currentX = 0;
  };

  slider.addEventListener('touchstart', (e) => startInteraction(e.touches[0].clientX));
  slider.addEventListener('touchmove', (e) => moveInteraction(e.touches[0].clientX));
  slider.addEventListener('touchend', endInteraction);

  slider.addEventListener('mousedown', (e) => startInteraction(e.clientX));
  document.addEventListener('mousemove', (e) => moveInteraction(e.clientX));
  document.addEventListener('mouseup', endInteraction);
}