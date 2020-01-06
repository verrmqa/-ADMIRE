$(document).ready(function() {
  $(window).scroll(function(event) {
    let s=$(this).scrollTop();
    let w=$(this).outerWidth();
    let h=$('.imagine').outerHeight();
    let h_b=$('.city__parallax').outerHeight();

    let p = s/h*100;
    let p_b = s/h_b*100;
    let o = 1-1/100*p_b;

    let z_1=1+(w/100000*p_b)

    $('.city__hero').css('transform', 'scale('+z_1+')')
  })
  
}) 