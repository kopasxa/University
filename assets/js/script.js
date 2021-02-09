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

  $(".tabs li a").click(function() {
		
		$(".tabs li a").removeClass("active");
		$(this).addClass("active");
		
		$(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
		$(this.rel).fadeIn(500).addClass("tab_content_active");
		
	});	

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

  // news 

  $(".sliderNews").owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsiveClass:true,
    items:4,
  });

  // footer 

  $("#footerSlide").owlCarousel({
    loop:true,
    margin:-50,
    navText: [],
    nav:true,
    responsiveClass:true,
    items:4,
  });
});
