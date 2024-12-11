import anime from '../../modules/animations/anime.es.js';

const setupHyperlinkAnimation = (selector) => {
  document.querySelectorAll(selector).forEach((link) => {
    const hover = anime({
      targets: link,
      scale: 1.1,
      translateY: 5,
      easing: 'easeOutQuad',
      duration: 300,
      autoplay: 0,
    });

    link.addEventListener('mouseenter', () => hover.play());
    link.addEventListener('mouseleave', () => hover.reset());
  });
}

const setupButtonAnimation = (selector) => {
  document.querySelectorAll(selector).forEach((button) => {
    const hover = anime({
      targets: button,
      scale: 1.1,
      translateZ: 5,
      boxShadow: "-2px -2px 5px #b249b7",
      easing: 'easeOutQuad',
      duration: 300,
      autoplay: 0
    });
    const click = anime({
      targets: button,
      scale: 0.9,
      boxShadow: "5px 5px 10px #b249b7",
      easing: 'easeInQuad',
      duration: 200,
      autoplay: 0
    });

    button.addEventListener('mouseenter', () => hover.play());
    button.addEventListener('mouseleave', () => hover.reset());

    button.addEventListener('mousedown', () => click.play());
    button.addEventListener('mouseup', () => click.reset());
  });
}

const setupShakeAnimation = (selector) => {
  document.querySelectorAll(selector).forEach((button) => {
    const shake = anime.timeline({
      autoplay: false,
      loop: true,
      easing: 'easeInOutSine',
    });
  
    shake
      .add({
        targets: button,
        translateX: [0, 10],
        duration: 100,
      })
      .add({
        targets: button,
        translateX: [-10, 0],
        duration: 100,
      })
      .add({
        targets: button,
        translateX: 0,
        duration: 2000,
      });
  
    button.addEventListener('mouseenter', () => {
      shake.reset();
      shake.play()
    });
    button.addEventListener('mouseleave', () => shake.pause());
  });
}

export {
  setupHyperlinkAnimation,
  setupButtonAnimation,
  setupShakeAnimation
}