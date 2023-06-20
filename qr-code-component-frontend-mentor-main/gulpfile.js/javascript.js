const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const size = require("gulp-size");

/**
 * It compiles all the JavaScript files in the src/scripts folder and outputs them to the
 * public/scripts folder.
 * @returns The return value is a stream of the files that have been concatenated.
 */
function compileJs() {
  return src("src/scripts/**/*.js", { sourcemaps: true })
    .pipe(concat("script.js"))

    .pipe(size({ title: "Javascript", showFiles: true, pretty: true }))
    .pipe(dest("public/scripts/", { sourcemaps: "." }));
}

exports.jsTask = compileJs;

// Need to work on this
