const { src, dest } = require("gulp");

const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const path = require("../config/path");
const app = require("../config/app");

const font = () => {
  return src(path.font.src)
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest));
};

module.exports = font;