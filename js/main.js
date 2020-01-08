
//прелоадер

  
  window.setTimeout(function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader--finished');
  
    const city = document.querySelector('.city');
    city.style.display = 'block';
  }, 1000);



//анимации
window.addEventListener('scroll', () => {

  //отсчет скролла
  const scrolled = window.pageYOffset;

  //переменные движения
  const backgroundMoveRate = scrolled * 0.4;
  const heroMoveRate = scrolled * 0.35;
  const moscowMoveRate = scrolled * 0.12;
  const lightersMoveRate = scrolled * 0.2;

  //переменные увеличения
  const heroScaleRate = 1-((scrolled-500) * 0.0005);
  const moscowScaleRate = 1-(scrolled * 0.00025);
  const houseRightScaleRate = 1+(scrolled * 0.0002);
  const lightersScaleRate = 0.6+(scrolled * 0.0002);

  //трансформации фона
  const background = document.querySelector('.city__background');
  background.style.transform = 'translate3d(0px, '+backgroundMoveRate+'px, 0px) scale(0.75)';
  
  //трансформации героя
  const hero = document.querySelector('.city__hero');
  if (window.pageYOffset < '500')
    hero.style.transform = 'translate3d(0px, '+heroMoveRate+'px, 0px) scale(1)';
    else 
    hero.style.transform = 'translate3d(0px, '+heroMoveRate+'px, 0px) scale('+heroScaleRate+')';
  
  //трансформация заднего ряда домов
  const moscow = document.querySelector('.city__moscow');
  moscow.style.transform = 'translate3d(0px, '+moscowMoveRate+'px, 0px) scale('+moscowScaleRate+')';

  const houseCenter = document.querySelector('.city__house-center');
  houseCenter.style.transform = 'translate3d(0px, '+moscowMoveRate+'px, 0px) scale('+moscowScaleRate+')';

  const houseLeft = document.querySelector('.city__house-left');
  houseLeft.style.transform = 'translate3d(0px, '+moscowMoveRate+'px, 0px)';

  //трансформация переднего ряда
  const houseRight = document.querySelector('.city__house-right');
  houseRight.style.transform = 'translate3d(0px, -'+lightersMoveRate+'px, 0px) scale('+houseRightScaleRate+')';

  const lighters = document.querySelector('.city__lighters');
  lighters.style.transform = 'translate3d(0px, -'+moscowMoveRate+'px, 0px) scale('+lightersScaleRate+')';

})


//анимация чисел в секции статистики
$('.text--imagine_number').animateNumber({ number: 100 });

/* //audio.js
audiojs.events.ready(function() {
  var as = audiojs.createAll();
}); */


function audio() {
  let player = document.querySelector("#player")
  let audioBtn = document.querySelector("#audioBtn");
  if (audioBtn.innerHTML == '<img class="audio_pic" src="./assets/img/speakerOut.png" alt="">') {
    audioBtn.innerHTML = '<img class="audio_pic" src="./assets/img/speaker.png" alt="">'
    player.play();
  } else{
    audioBtn.innerHTML = '<img class="audio_pic" src="./assets/img/speakerOut.png" alt="">'; 
    player.pause();
  }
}


audioBtn.addEventListener("click", audio);

/* // Функция изменяет содержимое t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "три") {
    t2.firstChild.nodeValue = "два";
  } else {
    t2.firstChild.nodeValue = "три";
  }
}

// Добавляет слушателя событий для таблицы
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false); */
