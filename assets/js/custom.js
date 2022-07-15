

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
        items: 1,
      },

      // breakpoint from 768 up
      768: {
        items: 2,
      },
      // breakpoint from 768 up
      1200: {
        items: 4,
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


// Video PopUp
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Video PopUp


