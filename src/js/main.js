$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: document.querySelector('.projects__button--right'),
  prevArrow: document.querySelector('.projects__button--left'),
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
const buttonsContainer = document.querySelector('.carousel-buttons');
const mainImageContainer = document.querySelector('.slider-for-wrapper');

magnifierIcon.addEventListener('mouseover', magnify);
carouselContainer.addEventListener('click', magnify);
carouselContainer.addEventListener('mouseup', magnify);
buttonsContainer.addEventListener('click', magnify);
mainImageContainer.addEventListener('mouseup', magnify);

magnifierIcon.addEventListener('touchmove', magnify);
carouselContainer.addEventListener('touchstart', magnify);
carouselContainer.addEventListener('touchend', magnify);
buttonsContainer.addEventListener('touchstart', magnify);
mainImageContainer.addEventListener('touchend', magnify);

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
  glass.style.backgroundSize = 'contain';

  const mediaQuery = window.matchMedia('(min-width: 1500px)');
  if (!mediaQuery.matches) {
    glass.style.left = '35px';
    glass.style.top = '150px';
  } else {
    glass.style.left = '200px';
    glass.style.top = '500px';
  }

  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  console.log('a');
  glass.addEventListener('mousemove', moveMagnifier);
  currentImage.addEventListener('mousemove', moveMagnifier);
  glass.addEventListener('touchstart', moveMagnifier);
  glass.addEventListener('touchmove', moveMagnifier);
  currentImage.addEventListener('touchmove', moveMagnifier);

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

    let pos_x = e.pageX || e.changedTouches[0].pageX;
    let pos_y = e.pageY || e.changedTouches[0].pageY;
    x = pos_x - a.left;
    y = pos_y - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
    // let a,
    //   x = 0,
    //   y = 0;
    // e = e || window.event;
    // a = currentImage.getBoundingClientRect();
    // x = e.pageX - a.left;
    // y = e.pageY - a.top;
    // x = x - window.pageXOffset;
    // y = y - window.pageYOffset;
    // return { x: x, y: y };
  }
  function setMagnifyingIcon() {
    glass.style.backgroundImage = "url('" + magnifierIcon.childNodes[0].src + "')";
    glass.style.backgroundPosition = '0px 0px';
    glass.style.border = 'none';
    if (!mediaQuery.matches) {
      glass.style.backgroundSize = '100px 100px';
    } else {
      glass.style.backgroundSize = '120px 120px';
    }
  }
}

// ===============================
// function magnify() {
//   // event.stopPropagation();
//   // event.preventDefault();
//   const currentImage = document.querySelector('.slider-for .slick-current > img');
//   if (currentImage.parentNode.firstElementChild.classList.contains('img-magnifier-glass')) {
//     return;
//   }
//   magnifierIcon.classList.add('invisible');
//   // event.stopPropagation();
//   // event.preventDefault();
//   const zoom = 3;
//   let glass, w, h, bw;

//   // glass = `<div class="img-magnifier-glass"><img src="./img/projects-images/magnifier.svg" alt="magnifying glass icon" /></div>`;
//   // currentImage.insertAdjacentHTML('beforebegin', glass);

//   glass = document.createElement('DIV');
//   glass.setAttribute('class', 'img-magnifier-glass');
//   console.log('a');
//   currentImage.parentElement.insertBefore(glass, currentImage);
//   glass.style.backgroundImage = "url('" + magnifierIcon.childNodes[0].src + "')";
//   glass.style.backgroundRepeat = 'no-repeat';
//   // glass.style.left = '200px';
//   // glass.style.top = '500px';
//   glass.style.left = '-18px';
//   glass.style.top = '100px';
//   console.log('glass', glass);
//   bw = 3;
//   // if (event.targetTouches.length == 1) {
//   //   var touch = event.targetTouches[0];
//   //   touchOffsetX = touch.pageX - touch.target.offsetLeft;
//   //   touchOffsetY = touch.pageY - touch.target.offsetTop;
//   // }
//   console.log(glass.offsetWidth, 'offset');
//   w = glass.offsetWidth / 2;
//   h = glass.offsetHeight / 2;
//   console.log('a');
//   glass.addEventListener('mousemove', moveMagnifier);
//   currentImage.addEventListener('mousemove', moveMagnifier);
//   glass.addEventListener('touchstart', moveMagnifier);
//   glass.addEventListener('touchmove', moveMagnifier);
//   currentImage.addEventListener('touchmove', moveMagnifier);
//   console.log('b');
//   function moveMagnifier(e) {
//     console.log('c');
//     var pos, x, y;
//     e.preventDefault();
//     pos = getCursorPos(e);
//     x = pos.x;
//     y = pos.y;
//     if (x > currentImage.width - w / zoom) {
//       x = currentImage.width - w / zoom;
//       setMagnifyingIcon();
//     }
//     if (x < w / zoom) {
//       x = w / zoom;
//       setMagnifyingIcon();
//     }
//     if (y > currentImage.height - h / zoom) {
//       y = currentImage.height - h / zoom;
//       setMagnifyingIcon();
//     }
//     if (y < h / zoom) {
//       y = h / zoom;
//       setMagnifyingIcon();
//     } else if (x > 30 && x < 1040 && y > 30 && y < 766) {
//       glass.style.backgroundImage = "url('" + currentImage.src + "')";
//       glass.style.borderColor = '#fff';
//       glass.style.borderWidth = '3px';
//       glass.style.borderStyle = 'solid';
//       glass.style.backgroundSize = currentImage.width * zoom + 'px ' + currentImage.height * zoom + 'px';
//       glass.style.left = x - w + 'px';
//       glass.style.top = y - h + 'px';
//       glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
//     }
//     console.log('d');
//   }

//   function getCursorPos(e) {
//     let a,
//       x = 0,
//       y = 0;
//     e = e || window.event;
//     a = currentImage.getBoundingClientRect();

//     let pos_x = e.pageX || e.changedTouches[0].pageX;
//     let pos_y = e.pageY || e.changedTouches[0].pageY;
//     // console.log(e.pageX, e.changedTouches[0].pageX);
//     console.log(pos_x, a.left);
//     x = pos_x - a.left;
//     y = pos_y - a.top;
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return { x: x, y: y };
//     // let a,
//     //   x = 0,
//     //   y = 0;
//     // e = e || window.event;
//     // a = currentImage.getBoundingClientRect();
//     // x = e.pageX - a.left;
//     // y = e.pageY - a.top;
//     // x = x - window.pageXOffset;
//     // y = y - window.pageYOffset;
//     // return { x: x, y: y };
//   }
//   function setMagnifyingIcon() {
//     glass.style.backgroundImage = "url('" + magnifierIcon.childNodes[0].src + "')";
//     glass.style.backgroundSize = '80px 80px';
//     glass.style.backgroundPosition = '0px 0px';
//     glass.style.border = 'none';
//   }
// }
