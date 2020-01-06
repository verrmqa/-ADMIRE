/* $(document).ready(function() {
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
  
})  */

/* 
var rellax = new Rellax('.rellax'); */

window.addEventListener('scroll', function() {

  console.log(window.pageYOffset)
  //отсчет скролла
  let scrolled = window.pageYOffset;


  //трансформации героя
  const hero = document.querySelector('.city__hero');

  let moveRate = scrolled * 0.5;
  let heroScaleRate = 1-((scrolled-1000) * 0.0005);

  if (window.pageYOffset < '1000')
    hero.style.transform = 'translate3d(0px, '+moveRate+'px, 0px) scale(1)';
    else 
    hero.style.transform = 'translate3d(0px, '+moveRate+'px, 0px) scale('+heroScaleRate+')';
  
  //трансформации фона
  const background = document.querySelector('.city__background');

  background.style.transform = 'translate3d(0px, '+moveRate+'px, 0px) scale(0.75)';

})
