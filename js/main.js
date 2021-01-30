$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

window.onscroll = function () {
  IsScroll();
};
function IsScroll() {
  const documento = document.documentElement.scrollTop;
  const body = document.body.scrollTop;
  if (body < 5 || documento < 5) {
    document.querySelector("header").style.opacity = 1;
  }
  if (body > 5 || documento > 5) {
    document.querySelector("header").style.opacity = 0.5;
  }
  if (body > 20 || documento > 20) {
    document.querySelector("header").style.opacity = 0;
  }
}



$('#assistir').click(function(e) {
    $('#modal-assistir').css('display','block');
    $(".close").click(function(){$('#modal-assistir').css('display','none');});
})

// $('#informacoes').click(function() {
//     $('#modal-informacoes').css('display','block');
//     $(".close").click(function(){$('#modal-informacoes').css('display','none');});
// })