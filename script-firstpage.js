//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

setInterval(function () {
  var nextBtn = document.getElementById('next');
  nextBtn.click();
}, 3000)

//Udobstva - pri hover nad snimka --> davane na novo id, koeto se suhranqva v promenliva --> contenta na diva stava tazi promenliva
$( ".hoverimg" ).hover(
    function() {

      showImage(this);
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );
  
  function showImage(el) {
    $(".display-udobstva").empty();
    let hovimg = el;
    $(hovimg).clone().appendTo(".display-udobstva");
  };
  
  
//Pri scroll --> zadavane na nov aktiven link
var link1 = $("#logo")
var link2 = $("#nastanqvane");
var link3 = $("#location");
var link4 = $("#udobstva1");

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 600 && scroll <= 1400) {
    link2.addClass("active");
    link1.removeClass("active");
    link3.removeClass("active");
    link4.removeClass("active")
  } else if (scroll > 1400 && scroll <= 2100) {
    link2.removeClass("active");
    link1.removeClass("active");
    link3.addClass("active");
    link4.removeClass("active")
  } else if (scroll > 2100) {
    link2.removeClass("active");
    link1.removeClass("active");
    link3.removeClass("active");
    link4.addClass("active")
  } else {
    link2.removeClass("active");
    link1.addClass("active");
    link3.removeClass("active");
    link4.removeClass("active")
  }
});


