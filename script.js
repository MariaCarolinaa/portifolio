M.AutoInit();

function rolar_para(elemento) {
    $('html, body').animate({
      scrollTop: $(elemento).offset().top
    }, 1000);
}

var instance = M.Carousel.init({
  fullWidth: true
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
