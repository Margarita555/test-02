const { src, dest } = require("gulp");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");

const path = require("../config/path");
const app = require("../config/app");

const html = () => {
  return src(path.html.src)
    .pipe(fileinclude())
    .pipe(htmlmin(app.htmlmin))
    .pipe(dest(path.html.dest));
};

module.exports = html;
