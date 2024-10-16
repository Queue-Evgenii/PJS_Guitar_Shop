const header = document.querySelector('.header');
const scrollUpButton = document.querySelector('#scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('_small');
    return;
  } 
  header.classList.remove('_small');
});

scrollUpButton.addEventListener('click', () => window.scrollTo(0, 0));