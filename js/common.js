document.addEventListener("DOMContentLoaded", function () {
  const projectSwiperEl = document.querySelector(".projectSwiper");

  if (projectSwiperEl) {
    new Swiper(projectSwiperEl, {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      grabCursor: true,

      navigation: {
        nextEl: ".project-next",
        prevEl: ".project-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }
});
