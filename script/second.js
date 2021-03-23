const slider2 = new Swiper('.slider2', {
  // Optional parameters,
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 2,
  speed: 1500,
  loop: true,
  
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
      speed: 1500,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: -30,
      speed: 1500,
      slidesPerGroup: 4,
      loop: true,    
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});