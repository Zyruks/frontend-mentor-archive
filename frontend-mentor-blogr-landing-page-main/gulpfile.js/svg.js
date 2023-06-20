const { src, dest } = require("gulp");
const svgMinify = require("gulp-svgmin");
const size = require("gulp-size");

/**
 * It compiles all the SVG files in the src/assets folder and outputs them to the public/assets folder.
 * @returns The SVG files are being minified and then sent to the public/assets folder.
 */
function compilesvg() {
  return src("src/assets/**/*.svg")
    .pipe(svgMinify())
    .pipe(size({ title: "SVG", showFiles: true, pretty: true }))
    .pipe(dest("public/assets/"));
}

exports.svgTask = compilesvg;
