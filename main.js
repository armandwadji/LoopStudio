const toggleMenu = document.querySelector(".header__nav--toggleMenu");
const hero = document.querySelector(".hero");
const menu = document.querySelector(".header__nav--menu");
const title = document.querySelector(".hero--title");

toggleMenu.addEventListener("click", () => {
  hero.classList.toggle("show");
  menu.classList.toggle("show");
  title.classList.toggle("show");
  toggleMenu.classList.toggle("show");
});
