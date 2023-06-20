const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const purge = require("gulp-purgecss");
const size = require("gulp-size");

/**
 * ScssCompiler() takes the SCSS files from the src/scss folder, compiles them into CSS, adds vendor
 * prefixes, minifies the CSS, and outputs the CSS files to the public/css folder
 * @returns the src function.
 */
function scssCompiler() {
  return src("src/scss/*.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer("last 2 versions")]))
    .pipe(purge({ content: ["src/**/*.html", "src/**/*.js"] }))
    .pipe(postcss([cssnano()]))
    .pipe(size({ title: "scss", showFiles: true, pretty: true }))

    .pipe(dest("public/css", { sourcemaps: "." }));
}

exports.scssTask = scssCompiler;
