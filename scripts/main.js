const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('_small');
    return;
  } 
  header.classList.remove('_small');
});