"use strict";

/* Importing all the tasks from the other files. */
const { series } = require("gulp");
const htmlMinify = require("./html");
const scssCompiler = require("./scss");
const imageCompiler = require("./images");
const jsCompiler = require("./javascript");
const svgCompiler = require("./svg");
const browserSync = require("./browsersync");
const watcher = require("./watch");

/* Exporting the default task. */
exports.default = series(
  htmlMinify.htmlTask,
  scssCompiler.scssTask,
  imageCompiler.imageTask,
  imageCompiler.favicon,
  jsCompiler.jsTask,
  svgCompiler.svgTask,
  browserSync.openServer,
  watcher.watchTask
);

exports.build = series(
  htmlMinify.htmlTask,
  scssCompiler.scssTask,
  imageCompiler.imageTask,
  imageCompiler.favicon,
  jsCompiler.jsTask,
  svgCompiler.svgTask
);

/* Execute htmlTask from html.js with gulp html on terminal */
exports.html = series(htmlMinify.htmlTask);

/* Execute scssTask from scss.js with gulp scss on terminal */
exports.scss = series(scssCompiler.scssTask);

exports.images = series(imageCompiler.imageTask);
exports.js = series(jsCompiler.jsTask);
exports.svg = series(svgCompiler.svgTask);
exports.browserSync = series(browserSync.openServer);
exports.watch = series(watcher.watchTask);
exports.favicon = series(imageCompiler.favicon);
