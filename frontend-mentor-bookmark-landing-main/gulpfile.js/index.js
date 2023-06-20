"use strict";

/*********************************************
Importing all the tasks from the other files.
 ********************************************/

const { series } = require("gulp");
const htmlCompiler = require("./html");
const scssCompiler = require("./scss");
const imageCompiler = require("./images");
const jsCompiler = require("./javascript");
const svgCompiler = require("./svg");
const browserSync = require("./browsersync");
const watcher = require("./watch");

/***********************************
 Exporting the default task. Development
 *********************************/
exports.default = series(
  htmlCompiler.htmlDevelopment,
  scssCompiler.scssDevelopment,
  imageCompiler.imageTask,
  jsCompiler.jsTask,
  svgCompiler.svgTask,
  imageCompiler.favicon,
  browserSync.openServer,
  watcher.watchTask
);

// default but without browserSync and Watcher
exports.dev = series(
  htmlCompiler.htmlDevelopment,
  scssCompiler.scssDevelopment,
  imageCompiler.imageTask,
  jsCompiler.jsTask,
  svgCompiler.svgTask,
  imageCompiler.favicon
);

/***********************************
 Exporting deployment
 *********************************/

exports.deploy = series(
  htmlCompiler.htmlDeployment,
  scssCompiler.scssDeployment,
  jsCompiler.jsTask,
  imageCompiler.imageTask,
  imageCompiler.favicon,
  svgCompiler.svgTask
);

/* Execute htmlTask from html.js with gulp html on terminal */
exports.html = series(htmlCompiler.htmlDeployment);
exports.scss = series(scssCompiler.scssDeployment);
exports.images = series(imageCompiler.imageTask);
exports.favicon = series(imageCompiler.favicon);
exports.js = series(jsCompiler.jsTask);
exports.svg = series(svgCompiler.svgTask);
exports.browserSync = series(browserSync.openServer);
exports.watch = series(watcher.watchTask);

exports.list = series(scssCompiler.cssAnalysis);
