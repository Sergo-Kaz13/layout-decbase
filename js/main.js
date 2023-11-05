const menu = document.querySelector(".nav-menu");
const menuItems = menu.children;

menu.addEventListener("click", (e) => {
  const a = e.target.closest("a");

  if (a) {
    for (const item of menuItems) {
      if (item.children[0].classList.contains("nav-menu__link_active")) {
        item.children[0].classList.remove("nav-menu__link_active");
      }
    }

    a.classList.add("nav-menu__link_active");
  }
});

const swiper = new Swiper(".service__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlidesBounds: true,
  slidesPerView: 3,
  spaceBetween: 37,
  centeredSlides: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    780: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1195: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
