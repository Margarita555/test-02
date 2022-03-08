const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");

const path = require("../config/path");

const css = () => {
  return src(path.css.src, { sourcemaps: true })
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest(path.css.dest, { sourcemaps: true }));
};

module.exports = css;
