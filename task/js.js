const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

const path = require("../config/path");
const app = require("../config/app");

const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: true }));
};

module.exports = js;
