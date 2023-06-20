"use strict";

/* Importing the required modules. */
const { watch, series } = require("gulp");
const htmlMinify = require("./html");
const scssCompiler = require("./scss");
const watcher = require("./browsersync");
const jsCompiler = require("./javascript");
const imageCompiler = require("./images");
const svgCompiler = require("./svg");

/**
 * It watches for changes in the html, scss, js, images and svg files and then runs the corresponding
 * tasks and reloads the server
 */
function watchTask() {
  /* Watching for changes in the html files and then running the htmlTask and reloading the server. */
  watch(
    "src/**/*.html",
    { events: "all" },

    series(htmlMinify.htmlTask, watcher.reloadServer)
  );

  /* Watching for changes in the scss files and then running the scssTask and reloading the server. */
  watch(
    "src/scss/**/**/*.scss",
    series(scssCompiler.scssTask, watcher.reloadServer)
  );

  /* Watching for changes in the js files and then running the jsTask and reloading the server. */
  watch("src/scripts/*.js", series(jsCompiler.jsTask, watcher.reloadServer));

  /* Watching for changes in the images folder and then running the imageTask and reloading the server. */
  watch(
    "src/assets/**/*",
    series(imageCompiler.imageTask, watcher.reloadServer)
  );

  /* Watching for changes in the svg files and then running the svgTask and reloading the server. */
  watch(
    "src/assets/**/*.svg",
    series(svgCompiler.svgTask, watcher.reloadServer)
  );
}

exports.watchTask = watchTask;
