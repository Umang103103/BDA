// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const scrolledClass = "scrolled";

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Always check if we've scrolled past the threshold
  if (scrollTop > 50) {
    navbar.classList.add(scrolledClass);
  } else {
    navbar.classList.remove(scrolledClass);
  }

  lastScrollTop = scrollTop;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Enhanced submenu positioning
function adjustSubmenuPosition() {
  // Only run on desktop
  if (window.innerWidth < 768) return;

  document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
    const menu = submenu.querySelector(".dropdown-menu");
    const submenuRect = menu.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const parentRect = submenu.getBoundingClientRect();

    // Calculate if submenu would extend beyond viewport
    const wouldExtendBeyond =
      parentRect.right + menu.offsetWidth > viewportWidth;

    // Check if there's enough space on the left
    const enoughSpaceOnLeft = parentRect.left - menu.offsetWidth > 0;

    if (wouldExtendBeyond && enoughSpaceOnLeft) {
      submenu.classList.add("left-aligned");
    } else {
      submenu.classList.remove("left-aligned");
    }
  });
}
