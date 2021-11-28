const flowerSlider = new Swiper('.main__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.main__button-next',
    prevEl: '.main__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    }
  }
});

const bestSlider = new Swiper('.best__slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.best__button-next',
    prevEl: '.best__button-prev',
  }
});