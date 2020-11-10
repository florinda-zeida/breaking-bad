var slideIndex = 0;
showSlides();

var slides, timer, dots;

function showSlides() {
    let i;
    slides = document.querySelectorAll(".slides-style");
    dots = document.querySelectorAll(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // Change slide every 10 seconds*/
    timer = setTimeout(showSlides, 3000);
}

// Sett new timer if slide is stop from arrow */
function plusSlides(position) {

    clearTimeout(timer);
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1 } else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timer = setTimeout(showSlides, 3000);
}