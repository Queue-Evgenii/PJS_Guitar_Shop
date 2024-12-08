export const scrollUpButtonEvent = () => {
  const scrollUpButton = document.querySelector('#scroll-up');
  scrollUpButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}