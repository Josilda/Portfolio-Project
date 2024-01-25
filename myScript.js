var typed = new Typed(".auto-input", {
    strings: ["I'm Josilda Pereira", "I Love Coding!"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

var myIndex = 0;
autoSlide();

function autoSlide() {
  var i;
  var imageSlides = document.getElementsByClassName("slideShow");
  for (i = 0; i < imageSlides.length; i++) {
    imageSlides[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > imageSlides.length) {myIndex = 1}    
  imageSlides[myIndex-1].style.display = "block";  
  setTimeout(autoSlide, 2000); // Change image every 2 seconds
}