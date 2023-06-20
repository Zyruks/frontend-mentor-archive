"use strict";

/* This is importing the gulp library and the browser-sync library. */
const { series } = require("gulp");
const browserSync = require("browser-sync").create();

/**
 * Start a server with BrowserSync and watch for changes to the HTML, CSS, and JavaScript files.
 * @param cb - This is a callback function that tells gulp when the task is done.
 */
function browsersyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: "public/",
      // directory: true,
      // https: true,
    },
    browser: ["google chrome", "firefox"],
    notify: false,
  });
  cb();
}

/**
 * BrowserSync.reload() is called, and then the callback function is called.
 * @param cb - A callback function that tells Gulp when the task is done.
 */
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

/* This is exporting the functions so that they can be used in the gulpfile.js file. */
exports.openServer = series(browsersyncServer);
exports.reloadServer = series(browserSyncReload);
