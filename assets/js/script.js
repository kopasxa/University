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

  $(".tabs li a").click(function () {
    $(".tabs li a").removeClass("active");
    $(this).addClass("active");

    $(".tab_content_container > .tab_content_active")
      .removeClass("tab_content_active")
      .fadeOut(200);
    $(this.rel).fadeIn(500).addClass("tab_content_active");
  });

  $("#birthDay .up").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "400");
  });

  // Sliders

  // 1
  $("#slider1").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    responsiveClass: true,
    items: 1,
    lazyLoad: true
  });

  // 2

  $("#slider2").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    responsiveClass: true,
    /* items: 9, */
    lazyLoad: true,
    responsive: {
      1920: {
        items: 9,
      },
      1440: {
        items: 6,
      },
      768: {
        items: 5,
      },
      410: {
        items: 3,
      },
      320: {
        items: 2, 
      },
      0: {
        items: 1,
      }
    }
  });

  // news

  var owl2 = $("#news .sliderNewsMain");
  owl2.owlCarousel({
    loop: true,
    margin: 25,
    dots: false,
    responsiveClass: true,
    items: 1,
    lazyLoad: true
  });

  $(".customNextBtn").click(function () {
    owl2.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    owl2.trigger("prev.owl.carousel", [300]);
  });

  $(".sliderNews").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots:false,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 4,
      },
      768: {
        items: 3,
      },
      0: {
        items: 2,
      }
    }
  });

  // events

  $("#events .owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 3,
      },
      0: {
        items: 2,
      }
    }
  });

  var scrollPos = 3000;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > scrollPos) {
      $(".slider1Big .owl-stage").css("transform", function () {
        let newStr = "translate3d(-" + scrollPos / 4 + "px , 0px, 0px)";
        return newStr;
      });
      $(".slider2Big .owl-stage").css("transform", function () {
        let newStr = "translate3d(" + (scrollPos / 4 - 1200) + "px , 0px, 0px)";
        return newStr;
      });
    } else {
      $(".slider1Big .owl-stage").css("transform", function () {
        let newStr = "translate3d(-" + scrollPos / 4 + "px , 0px, 0px)";
        return newStr;
      });
      $(".slider2Big .owl-stage").css("transform", function () {
        let newStr = "translate3d(" + (scrollPos / 4 - 1200) + "px , 0px, 0px)";
        return newStr;
      });
    }
    scrollPos = st;
  });

  // big

  $("#bigSlider .owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      768: {
        items: 3,
      },
      0: {
        items: 2,
      }
    }
  });


  $("#bigSlider .item").hover(
    function () {
      $(this).find(".offer").fadeIn(100).css("display", "flex");
    },
    function () {
      $(this).find(".offer").fadeOut(100).css("display", "none");
    }
  );

  // happy birthday

  $("#hb").owlCarousel({
    loop: true,
    margin: 81,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 5,
      },
      1280: {
        items: 4,
      },
      1000: {
        items: 3,
      },
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  // footer

  $("#footerSlide").owlCarousel({
    loop: true,
    margin: -50,
    navText: [],
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 4,
      },
      1000: {
        items: 3,
      },
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });
});
