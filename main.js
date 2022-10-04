const toggleMenu = document.querySelector(".toggle-menu");
const menuContainer = document.querySelector(".menu-container");

toggleMenu.addEventListener("click", () => {
  menuContainer.classList.toggle("show");

  if (menuContainer.classList.contains("show")) {
    toggleMenu.firstElementChild.attributes.src.value =
      "./img/icon-hamburger.svg";
  } else {
    toggleMenu.firstElementChild.attributes.src.value = "./img/icon-close.svg";
  }
});
