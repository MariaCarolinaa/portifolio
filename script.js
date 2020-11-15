M.AutoInit();

function rolar_para(elemento) {
    $('html, body').animate({
      scrollTop: $(elemento).offset().top
    }, 1000);
}


