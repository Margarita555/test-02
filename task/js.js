const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const concat = require('gulp-concat');

const path = require('../config/path');
const app = require('../config/app');

// const js = () => {
//   return (
//     src(['node_modules/jquery/dist/jquery.js', 'src/libs/slick.min.js', path.js.src], { sourcemaps: app.isDev })
//       .pipe(concat('main.js'))
//       .pipe(babel())
//       // .pipe(webpack(app.webpack))
//       .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
//   );
// };
const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;
