/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("$('body').text('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrssssssssssssssssssssssssssssffffffffffffffffffffgggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');\r\n\r\n// import $ from 'jquery';\r\n// import 'slick-carousel';\r\n// function initSlider(selector, options) {\r\n//   if ($.fn.slick) {\r\n//     $(selector).slick(options);\r\n//   } else {\r\n//     setTimeout(function () {\r\n//       initSlider(selector, options);\r\n//     }, 500);\r\n//   }\r\n// }\r\n// function initSlider() {\r\n//   $('.references').slick({\r\n//     dots: false,\r\n//     infinite: true,\r\n//     speed: 300,\r\n//     slidesToShow: 1,\r\n//     autoplay: true,\r\n//     prevArrow: '<div class=\"slick-prev\"><i class=\"fa fa-chevron-left\"></i></div>',\r\n//     nextArrow: '<div class=\"slick-next\"><i class=\"fa fa-chevron-right\"></i></div>',\r\n//   });\r\n// }\r\n\r\n// $(document).on('ready', function () {\r\n//   initSlider();\r\n// });\r\n\r\n// $(document).ready(function () {\r\n//   $('.slider-for').slick({\r\n//     slidesToShow: 1,\r\n//     slidesToScroll: 1,\r\n//     arrows: false,\r\n//     fade: true,\r\n//     asNavFor: '.carousel',\r\n//     initialSlide: 2,\r\n//   });\r\n\r\n//   $('.carousel').slick({\r\n//     arrows: false,\r\n//     slidesToShow: 2,\r\n//     slidesToScroll: 1,\r\n//     asNavFor: '.slider-for',\r\n//     focusOnSelect: true,\r\n//     dots: false,\r\n//   });\r\n// });\r\n// // import magnify from './module/magnify';\r\n\r\n// const magnifierIcon = document.querySelector('.magnifier-icon');\r\n// const carouselContainer = document.querySelector('.carousel-wrapper');\r\n\r\n// magnifierIcon.addEventListener('mouseover', magnify);\r\n// carouselContainer.addEventListener('click', magnify);\r\n// function magnify() {\r\n//   const img = document.querySelector(`.slick-current > img`);\r\n//   // const imgParent = document.querySelector(`.slick-current`).firstChild;\r\n//   // console.log(imgParent);\r\n//   // console.log(imgParent.firstChild);\r\n//   // if (imgParent.firstElementChild.classList.contains('img-magnifier-glass')) {\r\n//   //   return;\r\n//   // }\r\n//   if (img.parentNode.firstElementChild.classList.contains('img-magnifier-glass')) {\r\n//     return;\r\n//   }\r\n//   magnifierIcon.classList.add('invisible');\r\n//   const zoom = 3;\r\n//   let glass, w, h, bw;\r\n\r\n//   glass = document.createElement('DIV');\r\n//   glass.setAttribute('class', 'img-magnifier-glass');\r\n//   img.parentElement.insertBefore(glass, img);\r\n//   glass.style.backgroundImage = 'url(\"../img/projects-images/magnifier.svg\")';\r\n//   glass.style.backgroundRepeat = 'no-repeat';\r\n//   glass.style.left = '200px';\r\n//   glass.style.top = '500px';\r\n//   bw = 3;\r\n//   w = glass.offsetWidth / 2;\r\n//   h = glass.offsetHeight / 2;\r\n\r\n//   glass.addEventListener('mousemove', moveMagnifier);\r\n//   img.addEventListener('mousemove', moveMagnifier);\r\n\r\n//   function moveMagnifier(e) {\r\n//     var pos, x, y;\r\n//     e.preventDefault();\r\n//     pos = getCursorPos(e);\r\n//     x = pos.x;\r\n//     y = pos.y;\r\n//     if (x > img.width - w / zoom) {\r\n//       x = img.width - w / zoom;\r\n//       setMagnifyingIcon();\r\n//     }\r\n//     if (x < w / zoom) {\r\n//       x = w / zoom;\r\n//       setMagnifyingIcon();\r\n//     }\r\n//     if (y > img.height - h / zoom) {\r\n//       y = img.height - h / zoom;\r\n//       setMagnifyingIcon();\r\n//     }\r\n//     if (y < h / zoom) {\r\n//       y = h / zoom;\r\n//       setMagnifyingIcon();\r\n//     } else if (x > 30 && x < 1040 && y > 30 && y < 766) {\r\n//       glass.style.backgroundImage = \"url('\" + img.src + \"')\";\r\n//       glass.style.borderColor = '#fff';\r\n//       glass.style.borderWidth = '3px';\r\n//       glass.style.borderStyle = 'solid';\r\n//       glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px';\r\n//       glass.style.left = x - w + 'px';\r\n//       glass.style.top = y - h + 'px';\r\n//       glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';\r\n//     }\r\n//   }\r\n\r\n//   function getCursorPos(e) {\r\n//     var a,\r\n//       x = 0,\r\n//       y = 0;\r\n//     e = e || window.event;\r\n//     a = img.getBoundingClientRect();\r\n//     x = e.pageX - a.left;\r\n//     y = e.pageY - a.top;\r\n//     x = x - window.pageXOffset;\r\n//     y = y - window.pageYOffset;\r\n//     return { x: x, y: y };\r\n//   }\r\n//   function setMagnifyingIcon() {\r\n//     glass.style.backgroundImage = 'url(\"../img/projects-images/magnifier.svg\")';\r\n//     glass.style.backgroundSize = '120px 120px';\r\n//     glass.style.backgroundPosition = '0px 0px';\r\n//     glass.style.border = 'none';\r\n//   }\r\n// }\r\n\n\n//# sourceURL=webpack://test-02/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;