var slideIndex = 1;
var slides = [];
var container = null;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    $(slides[i]).removeClass("fade");
    $(slides[i]).detach();
  }

  container.prepend(slides[slideIndex-1]);
  $(slides[slideIndex-1]).addClass("fade");
  $(dots[slideIndex-1]).addClass("active");
}

function keydownHandler(e) {
  var evt = e ? e : event;
  var keyCode = evt.keyCode;

  if(keyCode == 37){ // Left
    plusSlides(-1);
  }

  if(keyCode == 39){ // Right
    plusSlides(1);
  }
}

document.onkeydown = keydownHandler;
document.onclick = function(){ plusSlides(1); }

window.onload = function(){
  container = $(".slideshow-container");

  /* Now build the slides */
  slides = [];
  for(var i = 1; i <= 26; i++){
    var s = String(i);
    while(s.length < 4) s = '0' + s; // Pad with zeros
    slides.push($(
      "<div class='mySlides fade'><img src='./pg_XXXX.svg' style='width:100%'></div>"
        .replace("XXXX", s)
    ));
  }

  var from_document = $(".slideshow-container .mySlides");
  slides.splice(4, 0, $(from_document[0]));

  showSlides(slideIndex);
}


