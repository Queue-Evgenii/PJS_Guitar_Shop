const header = document.querySelector('.header');
const scrollUpButton = document.querySelector('#scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('_small');
    return;
  } 
  header.classList.remove('_small');
});

scrollUpButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));



const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  navigation.classList.toggle('_active');
  burger.classList.toggle('_active');
});