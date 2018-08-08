var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sq-mySlides");
  var dots = document.getElementsByClassName("sq-dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
// showSlides()
(function(){
if ((document.querySelector(".sq-mySlides"))){
  showSlides(slideIndex);
}})()

function selectTab(element){
	console.log("i ran");
	var id = element.getAttribute('data-tab');
	document.querySelector('.tab.active').classList.remove('active');
	document.querySelector('sq-btn.active').classList.remove('active');
	document.querySelector('#' + id).classList.add('active');
	element.classList.add('active');
}