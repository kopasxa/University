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

// Sliders
  
  // 1
  $("#slider1").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    items:1,
  });

  // 2

  $("#slider2").owlCarousel({
    loop:true,
    margin:24,
    navText: [],
    nav:true,
    responsiveClass:true,
    items:9,
  });
});
