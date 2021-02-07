$(document).ready(function () {
  const menuBtn = document.querySelector(".menu-btn");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });

  const menuBtnBurger = document.querySelector(".menu-btn__burger");

  // Slider

  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    items:1,
});
});
