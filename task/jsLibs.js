const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

const path = require('../config/path');
const app = require('../config/app');

const jsLibs = () => {
  return src(path.jsLibs.src, { sourcemaps: app.isDev })
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.jsLibs.dest, { sourcemaps: app.isDev }));
};

// gulp.task('scripts', function () {
//   return gulp
//     .src([
//       // Берем все необходимые библиотеки
//       'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
//       'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js', // Берем Magnific Popup
//     ])
//     .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
//     .pipe(uglify()) // Сжимаем JS файл
//     .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
// });
module.exports = jsLibs;
