
// Sticky Top bar
var lastScrollTop = 0;
navbar = document.getElementById("topBar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  }
  else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
})
// Sticky Top bar


// bootstrap Slider
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  // interval: 500,
  // wrap: true
})
// bootstrap Slider

// Owl Carousel highlight-slider ///
if ($('#highlight-slider').length > 0) {
  $('#highlight-slider').owlCarousel({
    nav: true,
    margin: 15,
    reponsiveClass: true,
    dots: false,
    loop: true,
    navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
    // autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
      },

      // breakpoint from 768 up
      768: {
        items: 3,
      },
      // breakpoint from 991 up
      991: {
        items: 4,
      }
    }
  });
}
// Owl Carousel  highlight-slider ///


// Owl Carousel highlight-slider ///
if ($('#ads-slider').length > 0) {
  $('#ads-slider').owlCarousel({
    nav: true,
    items: 4,
    margin: 15,
    reponsiveClass: true,
    dots: false,
    loop: true,
    navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
    // autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
      },

      // breakpoint from 768 up
      768: {
        items: 2,
      },
      // breakpoint from 991 up
      991: {
        items: 3,
      }
    }
  });
}
// Owl Carousel  highlight-slider ///



// Scroll to top Progress
(function ($) {
  "use strict";

  //Switch dark/light

  $(".switch").on('click', function () {
    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $(".switch").removeClass("switched");
    }
    else {
      $("body").addClass("light");
      $(".switch").addClass("switched");
    }
  });

  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    })


  });

})(jQuery);
// Scroll to top Progress


// Scroll to Reveal
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}
// Scroll to Reveal



$(document).ready(function () {
  $('#Occupation').select2();
});

