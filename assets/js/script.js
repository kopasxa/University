$(document).ready(function () {
  // header mobile burg
  const menuBtn = document.querySelector(".menu-btn");
  let menuOpen = true;
  menuBtn.addEventListener("click", () => {
    $("body").css("overflow", "hidden");
  });

  menuBtn.onclick = function () {
    $(".wrapperHead .headerDopDownNav").addClass("visible");
  };

  $(".menu-btn-mobileMenu").on("click", function () {
    $("body").css("overflow", "auto");
    $(".wrapperHead .headerDopDownNav").removeClass("visible");
  });

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
  };

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
  };

  $(".tab_content").addClass("tab_content_active");

  setTimeout(function () {
    $(".tabs li a.active").trigger("click");
  }, 2000);

  $(".tabs li a").click(function () {
    $(".tabs li a").removeClass("active");
    $(this).addClass("active");

    $(".tab_content_container > .tab_content_active")
      .removeClass("tab_content_active")
      .fadeOut(200);
    $(this.rel).fadeIn(500).addClass("tab_content_active");
  });


  let coll = document.getElementsByClassName("arrowDownMenu");
  
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      let g =  this.parentElement ;
      console.log(g);
      g.classList.toggle("activeArrow");
      var content = g.nextSibling.nextSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      }
      else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    })
  }

  $("#birthDay .up").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "400"
    );
  });

  $("button.lang").on("click", function () {
    $(".subMenuLang").toggleClass("show");
  });

  $(".searchButtonImg").on("click", function () {
    $(".wrapForm").css({ opacity: "1", width: "100%", visibility: "visible" });
  });

  $(".formSearch .btnClose").on("click", function () {
    $(".wrapForm").css({ opacity: "0", width: "auto", visibility: "hidden" });
  });

  // Sliders

  // 1
  var pkSlider1 = $("#slider1").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    responsiveClass: true,
    singleItem: true,
    items: 1,
    lazyLoad: true,
    autoHeight: true,
  });

  $(".sliderScreen1").on("mouseover", function () {
    pkSlider1.trigger("play.owl.autoplay", [2000]);
  });
  $(".sliderScreen1").on("mouseout", function () {
    pkSlider1.trigger("stop.owl.autoplay");
  });

  $("#slider1410").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    responsiveClass: true,
    singleItem: true,
    items: 1,
    lazyLoad: true,
    autoHeight: true,
  });

  $("#slider1320").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    responsiveClass: true,
    singleItem: true,
    items: 1,
    lazyLoad: true,
    autoHeight: true,
  });

  // 2

  var slide2 = new Splide(".slider2Screen1 .splide", {
    type: "loop",
    arrowPath: "",
    perPage: 9,
    gap: 25,
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
      },
    },
  }).mount();

  // news

  var newsSlide = new Splide(".sliderNewsMain .splide", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
    cover: true,
    rewind: true,
  }).mount();

  var primarySlider = new Splide(".sliderNewsSecondTab1 .splide", {
    arrows: true,
    perPage: 4,
    perMove: 1,
    arrowPath: "",
    isNavigation: true,
    pagination: false,
    gap: 25,
    classes: {
      arrows: "prettyArrow buttonsSlider2",
      prev: "prev clickButtonL",
      next: "next clickButtonR",
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1920: {
        perPage: 4,
      },
    },
  }).mount();
  newsSlide.sync(primarySlider).mount();

  //////////////////////

  new Splide(".sliderNewsThirtyTab1 .splide", {
    type: "loop",
    arrowPath: "",
    gap: 25,
    perMove: 1,
    perPage: 4,
    classes: {
      arrows: "prettyArrow buttonsSlider2",
      prev: "prev",
      next: "next",
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
    },
  }).mount();

  // 2

  var newsSlide2 = new Splide(".sliderNewsMain2 .splide", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
    cover: true,
    rewind: true,
  }).mount();

  var primarySlider2 = new Splide(".sliderNewsSecondTab2 .splide", {
    arrows: true,
    perMove: 1,
    perPage: 4,
    arrowPath: "",
    isNavigation: true,
    pagination: false,
    gap: 25,
    classes: {
      arrows: "prettyArrow buttonsSlider2",
      prev: "prev clickButtonL",
      next: "next clickButtonR",
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
    },
  }).mount();
  newsSlide2.sync(primarySlider2).mount();

  new Splide(".sliderNewsThirtyTab2 .splide", {
    type: "loop",
    arrowPath: "",
    gap: 25,
    perMove: 1,
    perPage: 4,
    classes: {
      arrows: "prettyArrow buttonsSlider2",
      prev: "prev",
      next: "next",
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
    },
  }).mount();

  //3

  var newsSlide3 = new Splide(".sliderNewsMain3 .splide", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
    cover: true,
    rewind: true,
  }).mount();

  var primarySlider3 = new Splide(".sliderNewsSecondTab3 .splide", {
    arrows: true,
    perPage: 4,
    perMove: 1,
    arrowPath: "",
    isNavigation: true,
    pagination: false,
    gap: 25,
    classes: {
      arrows: "prettyArrow buttonsSlider2",
      prev: "prev clickButtonL",
      next: "next clickButtonR",
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
    },
  }).mount();
  newsSlide3.sync(primarySlider3).mount();

  new Splide(".sliderNewsThirtyTab3 .splide", {
    type: "loop",
    arrowPath: "",
    gap: 25,
    perMove: 1,
    classes: {
      arrows: "prettyArrow buttonsSlider2",
      prev: "prev",
      next: "next",
    },
    pagination: false,
    breakpoints: {
      320: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1920: {
        perPage: 4,
      },
    },
  }).mount();

  //

  $(".customNextBtn").click(function () {
    var activeTab = $(".tab_content_active").attr("customSlider");
    if (activeTab == 3) {
      newsSlide3.go(">");
    } else if (activeTab == 2) {
      newsSlide2.go(">");
    } else if (activeTab == 1) {
      newsSlide.go(">");
    }
  });
  $(".customPrevBtn").click(function () {
    var activeTab = $(".tab_content_active").attr("customSlider");
    if (activeTab == 3) {
      newsSlide3.go("<");
    } else if (activeTab == 2) {
      newsSlide2.go("<");
    } else if (activeTab == 1) {
      newsSlide.go("<");
    }
  });

  $(".slider2Screen1 .prev").click(function () {
    slide2.go("<");
  });
  $(".slider2Screen1 .next").click(function () {
    slide2.go(">");
  });

  // events

  new Splide(".sliderEvents .splide", {
    type: "loop",
    arrowPath: "",
    perPage: 3,
    gap: 25,
    perMove: 1,
    classes: {
      arrows: "prettyArrow buttonsSliderEvents",
      prev: "prev",
      next: "next",
    },
    pagination: false,
    breakpoints: {
      768: {
        perPage: 2,
      },
      495: {
        perPage: 1,
      },
      320: {
        perPage: 1,
      },
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

  // happy birthday

  new Splide(".sliderHB .splide", {
    type: "loop",
    arrowPath: "",
    perPage: 5,
    perMove: 1,
    gap: 40,
    classes: {
      arrows: "prettyArrow buttonsSliderHB",
      prev: "prev",
      next: "next",
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

  // arrows

  $(".owl-prev, .prev").on("click", function () {
    $(".owl-next, .next").removeClass("newNext");
    $(this).addClass("newPrev");
  });

  $(".owl-next, .next").on("click", function () {
    $(".owl-prev, .prev").removeClass("newPrev");
    $(this).addClass("newNext");
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
