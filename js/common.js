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

document.querySelectorAll(".submenu-toggle").forEach((btn) => {
  btn.addEventListener("click", function () {
    const menu = this.closest(".mega-item").querySelector(".mega-menu");
    const isOpen = menu.classList.contains("open");

    document
      .querySelectorAll(".mega-menu")
      .forEach((m) => m.classList.remove("open"));

    document
      .querySelectorAll(".submenu-toggle")
      .forEach((b) => (b.textContent = "+"));

    if (!isOpen) {
      menu.classList.add("open");
      this.textContent = "−";
    }
  });
});

const navbar = document.getElementById("heroNavbar");

navbar.addEventListener("shown.bs.collapse", function () {
  document.body.classList.add("menu-open");
});

navbar.addEventListener("hidden.bs.collapse", function () {
  document.body.classList.remove("menu-open");
});
