"use strict";

/* This is importing the required modules. */
const { src, dest } = require("gulp");
const htmlMinifier = require("gulp-htmlmin");
const htmlHint = require("gulp-htmlhint");
const size = require("gulp-size");

/**
 * It compiles HTML files.
 * @returns The htmlCompiler function is being returned.
 */
function htmlCompiler() {
  return src("src/**/*.html")
    .pipe(htmlHint())
    .pipe(htmlHint.reporter())
    .pipe(htmlHint.failAfterError())
    .pipe(htmlMinifier({ collapseWhitespace: true }))
    .pipe(size({ title: "HTML", showFiles: true, pretty: true }))
    .pipe(dest("public"));
}

/* Exporting the htmlCompiler function. */
exports.htmlTask = htmlCompiler;
