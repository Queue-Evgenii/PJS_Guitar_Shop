export const toggleHeaderClasslistOnScroll = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
      header.classList.add('_small');
      return;
    } 
    header.classList.remove('_small');
  });
}

export const burgerClickEvent = () => {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.header__navigation');

  burger.addEventListener('click', () => {
    navigation.classList.toggle('_active');
    burger.classList.toggle('_active');
  });
}