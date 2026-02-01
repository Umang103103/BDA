document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".projectSwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,

    navigation: {
      nextEl: ".project-swiper-next",
      prevEl: ".project-swiper-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 4 },
    },
  });
});
