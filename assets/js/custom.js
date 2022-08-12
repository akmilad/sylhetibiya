

function codespeedy() {
  var print_div = document.getElementById("PrintDownload");
  var print_area = window.open();
  print_area.document.write(print_div.innerHTML);
  print_area.document.close();
  print_area.focus();
  print_area.print();
}



// Sticky Top bar
var lastScrollTop = 0;
navbar = document.getElementById("topBar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  }
  else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
})
// Sticky Top bar



// Owl Carousel highlight-slider ///
if ($('#highlight-slider').length > 0) {
  $('#highlight-slider').owlCarousel({
    nav: true,
    margin: 15,
    reponsiveClass: true,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 500,
    // autoplayHoverPause: true,
    loop: true,
    navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
    // autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },

      // breakpoint from 768 up
      768: {
        items: 3
      },
      // breakpoint from 991 up
      991: {
        items: 4
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
var duration = 0;
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
  $('#Oversease').select2();
  $('#Gender').select2();
  $('#Religion').select2();
  $('#SrcMaritialStatus').select2();
});



// MultiStep Registration Form
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progressStepOne = document.querySelectorAll("#progressOne");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
// MultiStep Registration Form

// Download Pdf File 
document.getElementById("DownloadPdf")
  .addEventListener("click", () => {
    const watrMark = document.getElementById("WaterMark");
    const invoice = this.document.getElementById("PrintDownload");
    // watrMark.style.display = "block";
    watrMark.style.filter = "grayscale(100%)";
    watrMark.style.opacity = "20%";

    console.log(invoice);
    console.log(window);
    var opt = {
      margin: 1,
      filename: 'myfile.pdf',
      image: { type: 'pdf' },
    };
    html2pdf().from(invoice).set(opt).save();
  })
// Download Pdf File 

// Phone Number Picker 
var input = document.querySelector("#phonee");
window.intlTelInput(input, {

  utilsScript: "assets/js/utils.js"
});
// Phone Number Picker



// Select Box
function checkSelectboxes() {
  // select all checkboxes, here i choose to do so based on classname
  let selectboxes = document.querySelectorAll('.signUp-select');
  // loop through all checkboxes (only one this time)
  selectboxes.forEach(sb => {
    //add eventlistener to each checkbox
    sb.addEventListener('change', function (e) {
      // if the value of this checkbox isnt "" Then add class, otherwise : remove it.
      e.target.value !== "" ? e.target.classList.add('changed') : e.target.classList.remove('changed');
    })
  })
}

//call the function
checkSelectboxes();
// Select Box




function displayDivDemo(id, elementValue) {
  document.getElementById(id).style.display = elementValue.value == "" ? 'none' : 'block';
}


// PopUp Box
var popup = document.getElementById("popUpArea");
function opnePopup() {
  popup.classList.add("openPopup");
}
function closePopup() {
  popup.classList.remove("openPopup");
}
// PopUp Box


// Registration Image Upload JS
const wrapper = document.querySelector(".wrapper");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector(".showImg");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive() {
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    }
    cancelBtn.addEventListener("click", function () {
      img.src = "";
      wrapper.classList.remove("active");
    })
    reader.readAsDataURL(file);
  }
});
// Registration Image Upload JS



// var finalEnglishToBanglaNumber = {
//   0: "০",
//   1: "১",
//   2: "২",
//   3: "৩",
//   4: "৪",
//   5: "৫",
//   6: "৬",
//   7: "৭",
//   8: "৮",
//   9: "৯",
// };

// String.prototype.getDigitBanglaFromEnglish = function () {
//   var retStr = this;
//   for (var x in finalEnglishToBanglaNumber) {
//     retStr = retStr.replace(
//       new RegExp(x, "g"),
//       finalEnglishToBanglaNumber[x]
//     );
//   }
//   return retStr;
// };

// var english_number = "123456";

// var bangla_converted_number = english_number.getDigitBanglaFromEnglish();

// //outputs : ১২৩৪৫৬

// console.log(bangla_converted_number); //or alert(bangla_converted_number);\



