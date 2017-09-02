var slideIndex = 0;
var scrollInterval;
// var oPrevBtn = document.querySelector('.prev');
// var oNextBtn = document.querySelector('.next');


function autoScroll() {
	scrollInterval = setInterval(function () {
        toNextSlide();
    }, 5000);﻿
}

function toNextSlide(){
clearInterval(scrollInterval);
 	slideIndex++;
     showSlide(slideIndex);
 }

function toPrevSlide(){
 clearInterval(scrollInterval);
slideIndex--;
 showSlide(slideIndex);
}

function toExactSlide(index) {
    clearInterval(scrollInterval);
    slideIndex = index;
    showSlide(slideIndex);
}

function showSlide(n){
    var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length - 1){
        slideIndex = 0;
	}

	if(n < 0){
		slideIndex = slides.length-1;
	}

	for(i=0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}

	slides[slideIndex].style.display = "block";
	dots[slideIndex].className+= " active";
    autoScroll();
}

showSlide(0);


var dots = document.querySelectorAll('.dot');

Array.prototype.forEach.call(dots, function(dot, idx ) {
    dot.addEventListener( "click" , function() {
        toExactSlide(idx);
    });
});






















