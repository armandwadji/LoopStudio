const toggleMenu = document.querySelector(".toggle-menu");
const menuContainer = document.querySelector(".main-header");
const heroTitle = document.querySelector(".page-title");

const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
  console.log("click");

  if (menuContainer.classList.contains("show")) {
    menuContainer.classList.toggle("show");
    heroTitle.classList.toggle("show");
    menu.classList.toggle("show");
    toggleMenu.firstElementChild.attributes.src.value =
      "./img/icon-hamburger.svg";
  } else {
    menuContainer.classList.toggle("show");
    heroTitle.classList.toggle("show");
    menu.classList.toggle("show");
    toggleMenu.firstElementChild.attributes.src.value = "./img/icon-close.svg";
  }
});
