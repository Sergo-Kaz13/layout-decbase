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
