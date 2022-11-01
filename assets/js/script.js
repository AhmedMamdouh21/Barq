// $(window).on("load", function () {
const navBarHeight = $(".navbar-fixed").innerHeight();
// if ($(".navbar-fixed").length) {
$(".padding-top").css({
  "padding-top": navBarHeight + "px",
});

$(".hero-innner").css({
  "margin-top": navBarHeight + "px",
});
// console.log("navBarHeight", navBarHeight);
// }
$(".navbar .navbar-toggler").on("click", function () {
  $("body").toggleClass("open-menu");
  console.log("navBarHeight", navBarHeight);
});
function adjustNav() {
  var winWidth = $(window).width(),
    dropdown = $(".dropdown"),
    dropdownMenu = $(".dropdown-menu");

  if (winWidth >= 768) {
    dropdown.on("mouseenter", function () {
      $(this).addClass("show").children(dropdownMenu).addClass("show");
    });

    dropdown.on("mouseleave", function () {
      $(this).removeClass("show").children(dropdownMenu).removeClass("show");
    });
  } else {
    dropdown.off("mouseenter mouseleave");
    $(".dropdown-link").on("click", function (event) {
      event.preventDefault();
    });
    dropdown.on("click", function () {
      $(this).toggleClass("show").children(dropdownMenu).toggleClass("show");
    });
    dropdown.on("mouseleave", function () {
      $(this).removeClass("show").children(dropdownMenu).removeClass("show");
    });
  }
}

$(window).on("resize", adjustNav);

adjustNav();
if ($(".hero").length) {
  let swiperHero = new Swiper(".hero-swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      clickable: true,
    },
  });
}
if ($(".scroll-down")) {
  $(".scroll-down").on("click", function () {
    $("html, body").animate(
      {
        scrollTop:
          $("#" + $(this).data("scroll")).offset().top - navBarHeight + "px",
      },
      1200
    );
  });
}

// Counter {
if ($(".counter").length) {
  let nums = document.querySelectorAll(".counter .number");
  let sectionCount = document.querySelector(".counter");
  let started = false;
  // window.onscroll = function () {
  //   if (window.scrollY >= sectionCount.offsetTop - navBarHeight) {
  //     setTimeout(() => {
  //       $(".welcome-overlay").addClass("scale-img");
  //     }, 500);
  //     setTimeout(() => {
  //       $(".welcome-overlay").addClass("fade");
  //     }, 5000);
  //     setTimeout(() => {
  //       $(".welcome-to-barq").addClass("show");
  //       if (!started) {
  //         nums.forEach((num) => {
  //           startCount(num);
  //           // console.log("num", num);
  //         });
  //       }
  //       started = true;
  //     }, 5500);
  //   }
  //   // }
  // };

  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }
}

// Latest News
if ($(".latest-news-swiper").length) {
  let swiperLatestNews = new Swiper(".latest-news-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    // loop: true,
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: ".latest-news-swiper .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ("0" + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ("0" + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          " / " +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    navigation: {
      nextEl: ".latest-news-swiper .swiper-button-next",
      prevEl: ".latest-news-swiper .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
}

// BARQ Clients
if ($(".swiper-barq-partners").length) {
  let swiperBarqPartners = new Swiper(".swiper-barq-partners", {
    spaceBetween: 15,
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: ".swiper-barq-partners .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-barq-partners .swiper-button-next",
      prevEl: ".swiper-barq-partners .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
    },
  });
}

// BARQ Partners
if ($(".swiper-barq-clients").length) {
  let swiperBarqClients = new Swiper(".swiper-barq-clients", {
    spaceBetween: 15,
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: ".swiper-barq-clients .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-barq-clients .swiper-button-next",
      prevEl: ".swiper-barq-clients .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
    },
  });
}

if ($(".swiper-barq-certificates").length) {
  let swiperCertificates = new Swiper(".swiper-barq-certificates", {
    pagination: {
      el: ".swiper-barq-certificates .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-barq-certificates .swiper-button-next",
      prevEl: ".swiper-barq-certificates .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
// Scroll To Top
if ($(".backToTop").length) {
  $(".backToTop").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });
}
// preventDefault
if ($(".prevent-defult").length) {
  $(".prevent-defult").on("click", function (event) {
    event.preventDefault();
  });
}
// Photo Gallery
if ($(".swiper-photo-gallery").length) {
  let swiperHero = new Swiper(".swiper-photo-gallery", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: ".swiper-photo-gallery .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-photo-gallery .swiper-button-next",
      prevEl: ".swiper-photo-gallery .swiper-button-prev",
    },
  });
}

// Awards & Certificates
if ($(".awards-certificates").length) {
  let swiperBarqAwardsCertificates = new Swiper(".swiper-awards-certificates", {
    spaceBetween: 15,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    pagination: {
      el: ".swiper-awards-certificates .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-awards-certificates .swiper-button-next",
      prevEl: ".swiper-awards-certificates .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

if ($("select").length) {
  $("select").selectpicker();
  $("select").on("change", function (e) {
    let selectedValue = $(this).find("option:selected").val();
    console.log("selectedValue", selectedValue);
    let filters = [];
    let appendUrl = "";
    $("select ").each(function (event) {
      console.log("event", event);
      let name = $(this).attr("name");

      const string = $(this).attr("id");
      const value = $(this).find("option:selected").val();
      if (selectedValue) {
        filters.push(name + "=" + value);
      }
    });
    // window.location.search = filters.join("&");
    // console.log("filters", filters.join("&"));
    let currentURL = window.location.href;
    let afterDomain = currentURL.substring(currentURL.lastIndexOf("/") + 1);
    let beforeQueryString = afterDomain.split("?")[0];
    appendUrl = beforeQueryString + "?" + filters.join("&");
    // console.log("appendUrl", appendUrl);
    history.pushState({}, null, appendUrl);
    location.reload();
    // console.log("window.location.search", window.location.search);
  });
}

if ($("#containerFilter").length) {
  $("#containerFilter").mixItUp();
}

/*** Form ***/
function getFormData() {
  var formData = "";
  $("#formSubmit input").each(function () {
    var obj = "";
    obj = $(this).attr("name") + "=" + $(this).val();
    formData += obj;
    formData += "&";
  });
  return formData;
}

if ($("#formSubmit").length) {
  function sendInquiry() {
    var formData = new FormData($("#formSubmit")[0]);
    console.log("form data :", formData);
    $.ajax({
      type: "POST",
      contentType: false,
      processData: false,
      url: $("#formSubmit").attr("action"),
      data: formData,
      success: function (data) {
        $("#formSubmit").find(".error-res").html("");

        if (data.status) {
          setTimeout(() => {
            // window.location.href = $("#thankUrl").val();
            $("#formSubmit").slideUp();
            $("#showThankYou").slideDown();
          }, 1000);
          if (data.status.url) {
            setTimeout(() => {
              window.open(data.status.url, "_blank");
            }, 1200);
          }
        } else {
          var errors = data.messages;
          for (var i in errors) {
            var output = "";
            for (var j in errors[i]) {
              output += errors[i][j];
              $("#formSubmit input").each(function () {
                if ($(this).attr("name") == i) {
                  $(this).parent().find(".error-res").html(output);
                }
              });
            }
          }
        }
      },
      error: function (e) {
        let errors = JSON.parse(e.responseText);
        console.log("errors", errors);
        $('button[type="submit"]').removeClass("disabled");
      },
    });
  }

  $("form").each(function () {
    var formID = "#" + this.id;
    console.log(formID);

    this.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        if (this.checkValidity()) {
          $('button[type="submit"]').addClass("disabled");
          sendInquiry();
        }

        this.classList.add("was-validated");
      },
      false
    );
  });
}
if ($(".custom-file-input").length) {
  $(".custom-file-input").on("change", function (e) {
    let fileName = e.target.files[0].name;
    console.log($(this).html(fileName));
    let text = fileName.substr(0, 20);
    $(this).parent().find(".custom-file-text").html(text);
  });
}

if ($("#phone").length) {
  let input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "eg",
    separateDialCode: true,
  });
}

if ($(".enquiryFormModal").length) {
  $(".enquiryFormModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    let id = button.data("id");
    let modal = $(this);
    modal.find(".modal-body .input-hidden").val(id);
  });

  $(".enquiryFormModal").on("hidden.bs.modal", function (e) {
    $("#formSubmit")[0].reset();
    $(".enquiryFormModal").find(".modal-body .input-hidden").val("");
    $("#formSubmit").slideDown();
    $("#showThankYou").slideUp();
  });
}

// Video Model

function playVideo() {
  // function getId(url) {
  //   const regExp =
  //     /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  //   const match = url.match(regExp);

  //   return match && match[2].length === 11 ? match[2] : null;
  // }
  $(".media-src").on("click", function () {
    var videosrc = $(this).attr("videosrc");
    var imagesrc = $(this).attr("imagesrc");
    // var empededLink = getId(videosrc);
    $(".videoModal").modal("show");
    if (videosrc != null) {
      $(".videoModal .video video").attr(
        "src",
        videosrc +
          "?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=1"
      );
      $(".videoModal .video").removeClass("d-none");
      $(".videoModal .image").addClass("d-none");
    } else {
      $(".videoModal .image").removeClass("d-none");
      $(".videoModal .video").addClass("d-none");

      $(".videoModal .image img").attr("src", imagesrc);
    }
    console.log("videosrc", videosrc);
    // console.log("empededLink", empededLink);
  });

  $(".videoModal").on("hidden.bs.modal", function (e) {
    $(".videoModal .video video").attr("src", "");
    $(".videoModal .image img").attr("src", "");
  });
}

if ($(".media-src").length) {
  playVideo();
}

// Clients
if ($(".clients-section").length) {
  // Load More Get Data
  const container = document.querySelector(".more-data");
  const loading = document.querySelector(".loading-scroll");
  const data_url = $("#containerLoadMore").attr("data-url");
  let page_number = 1;
  let current_index = 0;
  const items_per_page = 4;
  let total = 0;

  function loadIteams() {
    $.ajax({
      type: "GET",
      url: data_url,
      dataType: "json",
      success: (data) => {
        current_index = (page_number - 1) * items_per_page;
        upper_limit_index = current_index + items_per_page - 1;
        console.log("page_number", page_number);
        console.log("current_index", current_index);
        console.log("upper_limit_index", upper_limit_index);
        total = data.length;
        console.log("total", total);
        while (current_index <= upper_limit_index) {
          console.log("data", data[current_index]);
          const postElement = document.createElement("div");
          postElement.classList.add(
            "col-lg-3",
            "col-6",
            "logo-wrap",
            "px-0",
            "mb-3"
          );
          postElement.innerHTML = `

          <a
            href="${data[current_index].url}"
            target="_blank"
            class="logo py-3 d-flex align-items-center justify-content-center"
          >
              <img class="img-fluid" src=" ${data[current_index].img}" alt="${data[current_index].imageTitle}" />
          </a>
                    `;
          container.appendChild(postElement);
          console.log("data_url", postElement);
          current_index++;
          setTimeout(function () {
            loading.classList.remove("show");
          }, 200);
        }
        page_number++;
      },
    });
  }
  loadIteams();
  loadIteams();
  loadIteams();
  // loading.classList.remove("show");

  $(".btn-load-more").on("click", function () {
    if (current_index < total) {
      loading.classList.add("show");
      setTimeout(() => {
        loadIteams();
      }, 100);
    } else if (upper_limit_index == total - 1) {
      setTimeout(function () {
        loading.classList.remove("show");
        $(".btn-load-more").addClass("hidden");
      }, 100);
    }
  });
}

if ($(".who-we-are-list").length) {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $(".who-we-are-list").addClass("fixed-header");
      $(".who-we-are-list").css({
        top: navBarHeight + "px",
      });
    } else {
      $(".who-we-are-list").removeClass("fixed-header");
      $(".who-we-are-list").css({
        top: 0 + "px",
      });
    }
  });
}
// });
if ($("#welcomeToBarq").length) {
  $(function () {
    // wait for document ready

    var controller = new ScrollMagic.Controller();

    var tween = TweenMax.to(".welcome-overlay .shape", 1, {
      scale: 40,
      ease: Linear.easeNone,
    });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#welcomeToBarq",
      triggerHook: "onLeave",
      duration: 1500,
    })
      .setClassToggle(".welcome-to-barq", "show")
      .reverse(true)
      .setTween(tween)
      .setPin("#welcomeToBarq")
      // .addIndicators({ name: "INTRO" }) // add indicators (requires plugin)
      .addTo(controller);
    let nums = document.querySelectorAll(".counter .number");
    let started = false;
    // setTimeout(() => {
    // $(".welcome-to-barq").addClass("show");
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
        console.log("num", num);
      });
    }
    started = true;
    // }, 5500);
  });
}

if ($("html")[0].lang == "ar") {
  // alert("ar");
  $(".swiper").attr("dir", "rtl");
} else {
  $(".swiper").attr("dir", "");
}
