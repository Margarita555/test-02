// import $ from 'jquery';
// import 'slick-carousel';
const sum = require('./module/sum');
console.log(sum(3, 7));

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.carousel',
  initialSlide: 2,
});

$('.carousel').slick({
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  dots: false,
});

const magnifierIcon = document.querySelector('.magnifier-icon');
const carouselContainer = document.querySelector('.carousel-wrapper');

magnifierIcon.addEventListener('mouseover', magnify);
carouselContainer.addEventListener('click', magnify);

function magnify() {
  const img = document.querySelector(`.slick-current > img`);
  if (img.parentNode.firstElementChild.classList.contains('img-magnifier-glass')) {
    return;
  }
  magnifierIcon.classList.add('invisible');
  const zoom = 3;
  let glass, w, h, bw;

  glass = document.createElement('DIV');
  glass.setAttribute('class', 'img-magnifier-glass');
  img.parentElement.insertBefore(glass, img);
  glass.style.backgroundImage = 'url("../img/projects-images/magnifier.svg")';
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.left = '200px';
  glass.style.top = '500px';
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener('mousemove', moveMagnifier);
  img.addEventListener('mousemove', moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
      setMagnifyingIcon();
    }
    if (x < w / zoom) {
      x = w / zoom;
      setMagnifyingIcon();
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
      setMagnifyingIcon();
    }
    if (y < h / zoom) {
      y = h / zoom;
      setMagnifyingIcon();
    } else if (x > 30 && x < 1040 && y > 30 && y < 766) {
      glass.style.backgroundImage = "url('" + img.src + "')";
      glass.style.borderColor = '#fff';
      glass.style.borderWidth = '3px';
      glass.style.borderStyle = 'solid';
      glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px';
      glass.style.left = x - w + 'px';
      glass.style.top = y - h + 'px';
      glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
    }
  }

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
  function setMagnifyingIcon() {
    glass.style.backgroundImage = 'url("../img/projects-images/magnifier.svg")';
    glass.style.backgroundSize = '120px 120px';
    glass.style.backgroundPosition = '0px 0px';
    glass.style.border = 'none';
  }
}
