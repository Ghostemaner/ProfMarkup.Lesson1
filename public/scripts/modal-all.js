// let openMenuButton = document.getElementById("burger");

// let navigationMenu = document.getElementById("menu");

// let closeMenuButton = document.getElementById("close")



// openMenuButton.addEventListener("click", function () {
//     navigationMenu.classList.toggle("header__navigation-none");

//     navigationMenu.classList.toggle("header__navigation-block");
// });

// closeMenuButton.addEventListener("click", function () {
//     navigationMenu.classList.remove("header__navigation-block");

//     navigationMenu.classList.add("header__navigation-none");
// });


let filterButton = document.getElementById("filter-button");
let accordion = document.getElementById("accordionExample");

if (filterButton) {

    filterButton.addEventListener("click", function () {
        accordion.classList.toggle("accordion-none");
        filterButton.classList.toggle("accordion-none");
        accordion.classList.add("accordion-block");
    });


    let filterButtonSub = document.getElementById("filter-button-sub");

    filterButtonSub.addEventListener("click", function () {
        accordion.classList.toggle("accordion-none");
        filterButton.classList.toggle("accordion-none");
        accordion.classList.add("accordion-block");
    });
}


let DropDown = document.getElementsByClassName("dropdown-menu");

for (let Drop of DropDown) {
    Drop.addEventListener("click", function (e) {
        e.stopPropagation();
    })
}