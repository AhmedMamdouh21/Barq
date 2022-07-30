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
// Video Model

function playVideo() {
  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
  $(".media-videos").on("click", function () {
    var videosrc = $(this).attr("videosrc");
    var empededLink = getId(videosrc);
    $(".videoModal").modal("show");

    $(".videoModal iframe").attr(
      "src",
      "https://www.youtube.com/embed/" +
        empededLink +
        "?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=1"
    );
    console.log("videosrc", videosrc);
    console.log("empededLink", empededLink);
  });

  $(".videoModal").on("hidden.bs.modal", function (e) {
    $(".videoModal iframe").attr("src", "");
  });
}
if ($(".media-videos").length) {
  playVideo();
}

// Counter {
if ($(".counter").length) {
  let nums = document.querySelectorAll(".counter .number");
  let sectionCount = document.querySelector(".counter");
  let started = false;
  window.onscroll = function () {
    if (window.scrollY >= sectionCount.offsetTop - navBarHeight) {
      setTimeout(() => {
        $(".welcome-overlay").addClass("scale-img");
      }, 500);
      setTimeout(() => {
        $(".welcome-overlay").addClass("fade");
      }, 2500);
      setTimeout(() => {
        $(".welcome-to-barq").addClass("show");
        if (!started) {
          nums.forEach((num) => {
            startCount(num);
            // console.log("num", num);
          });
        }
        started = true;
      }, 3000);
    }
    // }
  };

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

if ($("select").length) {
  $("select").selectpicker();
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
            window.location.href = $("#thankUrl").val();
          }, 1000);
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
// });

if ($("html")[0].lang == "ar") {
  // alert("ar");
  $(".swiper").attr("dir", "rtl");
} else {
  $(".swiper").attr("dir", "");
}
