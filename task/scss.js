const { src, dest } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));

const path = require("../config/path");
const app = require("../config/app");

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }));
};

module.exports = scss;
