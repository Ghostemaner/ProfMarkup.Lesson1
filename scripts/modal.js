let openMenuButton = document.getElementById("burger");

let navigationMenu = document.getElementById("menu");

let closeMenuButton = document.getElementById("close")

let brandWrapperAnimtation = document.getElementById("brand__wrapper-animation")

openMenuButton.addEventListener("click", function () {
    navigationMenu.classList.toggle("header__navigation--none");
    brandWrapperAnimtation.classList.toggle("brand__wrapper-animtation");
    navigationMenu.classList.toggle("header__navigation--block");
});

closeMenuButton.addEventListener("click", function () {
    navigationMenu.classList.remove("header__navigation--block");
    navigationMenu.classList.add("header__navigation--none");
});