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
  variableWidth: true,
});

$('.blog__carousel').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: true,
});

$('.hero__carousel').slick({
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: document.querySelector('.arrow-right'),
  prevArrow: document.querySelector('.arrow-left'),
  appendDots: $('.dots__container'),
});

const magnifierIcon = document.querySelector('.magnifier-icon');
const carouselContainer = document.querySelector('.carousel-wrapper');

magnifierIcon.addEventListener('mouseover', magnify);
carouselContainer.addEventListener('click', magnify);
carouselContainer.addEventListener('mouseup', magnify);
function magnify() {
  const currentImage = document.querySelector('.slider-for .slick-current > img');
  if (currentImage.parentNode.firstElementChild.classList.contains('img-magnifier-glass')) {
    return;
  }
  magnifierIcon.classList.add('invisible');
  const zoom = 3;
  let glass, w, h, bw;

  glass = document.createElement('DIV');
  glass.setAttribute('class', 'img-magnifier-glass');
  currentImage.parentElement.insertBefore(glass, currentImage);
  glass.style.backgroundImage = "url('" + magnifierIcon.childNodes[0].src + "')";
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.left = '200px';
  glass.style.top = '500px';
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener('mousemove', moveMagnifier);
  currentImage.addEventListener('mousemove', moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > currentImage.width - w / zoom) {
      x = currentImage.width - w / zoom;
      setMagnifyingIcon();
    }
    if (x < w / zoom) {
      x = w / zoom;
      setMagnifyingIcon();
    }
    if (y > currentImage.height - h / zoom) {
      y = currentImage.height - h / zoom;
      setMagnifyingIcon();
    }
    if (y < h / zoom) {
      y = h / zoom;
      setMagnifyingIcon();
    } else if (x > 30 && x < 1040 && y > 30 && y < 766) {
      glass.style.backgroundImage = "url('" + currentImage.src + "')";
      glass.style.borderColor = '#fff';
      glass.style.borderWidth = '3px';
      glass.style.borderStyle = 'solid';
      glass.style.backgroundSize = currentImage.width * zoom + 'px ' + currentImage.height * zoom + 'px';
      glass.style.left = x - w + 'px';
      glass.style.top = y - h + 'px';
      glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
    }
  }

  function getCursorPos(e) {
    let a,
      x = 0,
      y = 0;
    e = e || window.event;
    a = currentImage.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
  function setMagnifyingIcon() {
    glass.style.backgroundImage = "url('" + magnifierIcon.childNodes[0].src + "')";
    glass.style.backgroundSize = '120px 120px';
    glass.style.backgroundPosition = '0px 0px';
    glass.style.border = 'none';
  }
}
