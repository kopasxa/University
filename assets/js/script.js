$(document).ready(function () {

  /* setTimeout(function () {
    $(".slider1Big").removeClass("owl-loaded");
    $(".slider2Big").removeClass("owl-loaded");
  }, 500);

  setTimeout(function () {
    $(".slider1Big").addClass("owl-loaded");
    $(".slider2Big").addClass("owl-loaded");
  }, 2000); */
  
  $(".owl-prev, .next").on( "click", function() {
    console.log(1);
    $(".owl-next, .next").removeClass("newNext");
    $(this).addClass("newPrev");
  });

  $(".owl-next, .splide__arrow").on( "click", function() {
    $(".owl-prev, .prev").removeClass("newPrev");
    $(this).addClass("newNext");
  });

  // header mobile burg
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

  menuBtn.onclick = function () {
    $(".wrapperHead .headerDopDownNav").toggle(".showBlock");
  }

  // header desktop burg
  const menuBtnDesk = document.querySelector(".menu-desktop-btn");
  let menuOpenDesk = false;
  menuBtnDesk.addEventListener("click", () => {
    if (!menuOpenDesk) {
      menuBtnDesk.classList.add("open");
      menuOpenDesk = true;
    } else {
      menuBtnDesk.classList.remove("open");
      menuOpenDesk = false;
    }
  });

  menuBtnDesk.onclick = function () {
    $(".deskMenu").toggle(".showBlock");
  }

  // news burg
  const menuBtnNews = document.querySelector(".btn-menu-news");
  let menuOpenNews = false;
  menuBtnNews.addEventListener("click", () => {
    if (!menuOpenNews) {
      menuBtnNews.classList.add("open");
      menuOpenNews = true;
    } else {
      menuBtnNews.classList.remove("open");
      menuOpenNews = false;
    }
  });

  menuBtnNews.onclick = function () {
    $("#news .newsBlock").toggle(".showBlock");
  }

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

  new Splide( '.slider2Screen1 .splide', {
    type   : 'loop',
    arrowPath: '',
    perPage: 9,
    classes: {
      arrows: 'prettyArrow buttonsSlider2',
      prev  : 'prev',
      next  : 'next',
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      375: {
        perPage: 2,
      },
      425: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1000: {
        perPage: 5,
      },
      1440: {
        perPage: 6,
      }
    },
  }).mount();

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

  new Splide( '.sliderEvents .splide', {
    type   : 'loop',
    arrowPath: '',
    perPage: 3,
    classes: {
      arrows: 'prettyArrow buttonsSliderEvents',
      prev  : 'prev',
      next  : 'next',
    },
    pagination: false,
    breakpoints: {
      768: {
        perPage: 2,
      },
      320: {
        perPage: 1,
      }
    },
  }).mount();

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
    responsive: {
      768: {
        items: 3,
      },
      425: {
        items: 2,
      },
      375: {
        items: 1,
      },
    },
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
/*     touchDrag: false,
    mouseDrag: false, */
    responsiveClass: false,
  });


  $("#bigSlider .owl-item ").hover(
    function () {
      $(this).removeClass("cloned");
      $(this).addClass("active");
      $(this).find(".offer").addClass("showBlock");
    },
    function () {
      $(this).find(".offer").removeClass("showBlock");
      $(this).addClass("cloned");
      $(this).removeClass("active");
    }
  );

  /* $("#bigSlider .owl-item").mouseover(function() {
    $(this).find(".offer").addClass("showBlock");
  }).mouseout(function() {
      $(this).find(".offer").removeClass("showBlock");
  }); */

  // happy birthday

  new Splide( '.sliderHB .splide', {
    type   : 'loop',
    arrowPath: '',
    perPage: 5,
    classes: {
      arrows: 'prettyArrow buttonsSliderHB',
      prev  : 'prev',
      next  : 'next',
    },
    pagination: false,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1000: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  }).mount();

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
