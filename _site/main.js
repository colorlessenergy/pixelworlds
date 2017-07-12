let menuIcon = document.querySelectorAll(".button")
let responsiveNav = document.querySelector("#responsive-nav")
console.log("loaded");

for (var i = 0; i < menuIcon.length; i++) {
  console.log(menuIcon);
  console.log(responsiveNav);
  menuIcon[i].addEventListener("click", function () {
    console.log("clicked", menuIcon[i]);
    responsiveNav.classList.toggle("toggle-nav");
  });
}
