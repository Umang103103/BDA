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
//time line
const slider = document.querySelector(".timeline-scroll");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});
