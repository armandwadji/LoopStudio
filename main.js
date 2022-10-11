const toggleMenu = document.querySelector(".header__nav--toggleMenu");
const hero = document.querySelector(".hero");
const menu = document.querySelector(".header__nav--menu");
const title = document.querySelector(".hero--title");

toggleMenu.addEventListener("click", () => {
  console.log("click");

  if (hero.classList.contains("show")) {
    hero.classList.toggle("show");
    menu.classList.toggle("show");
    title.classList.toggle("show");
    toggleMenu.firstElementChild.attributes.src.value =
      "/img/Icons/icon-hamburger.svg";
  } else {
    hero.classList.toggle("show");
    menu.classList.toggle("show");
    title.classList.toggle("show");
    toggleMenu.firstElementChild.attributes.src.value =
      "/img/Icons/icon-close.svg";
  }
});
