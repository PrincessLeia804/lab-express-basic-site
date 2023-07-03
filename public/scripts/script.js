const simpleSlides = function () {
    let i;
    let slides = document.querySelectorAll(".slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style","display:none");
    }
    count++;
    if (count > slides.length) { count = 1; }
    slides[count-1].setAttribute("style","display:block");
    setTimeout(simpleSlides, 3000);
}

let count = 0;
simpleSlides();