M.AutoInit();

function rolar_para(elemento) {
    $('html, body').animate({
      scrollTop: $(elemento).offset().top
    }, 1000);
}

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});