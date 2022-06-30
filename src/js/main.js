import magnify from './module/magnify';

const magnifierIcon = document.querySelector('.magnifier-icon');
const carouselContainer = document.querySelector('.carousel-wrapper');

magnifierIcon.addEventListener('mouseover', magnify);
carouselContainer.addEventListener('click', magnify);

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


