"use strict";
//NOT IN USE REQUIRE WORK!
// list of dependence
const { src, dest } = require("gulp");
const favicons = require("gulp-favicons");
const newerFiles = require("gulp-newer");

function faviconCompilerDevelopment() {
  return src("src/assets/favicon/*.{svg,png}")
    .pipe(
      favicons({
        appName: "My App",
        appShortName: "App",
        appDescription: "This is my application",
        developerName: "Hayden Bleasel",
        developerURL: "http://haydenbleasel.com/",
        background: "#020307",
        path: "favicons/",
        url: "http://haydenbleasel.com/",
        display: "any",
        orientation: "portrait",
        scope: "/",
        start_url: "/?homescreen=1",
        version: 1.0,
        logging: false,
        icons: {
          // Platform Options:
          // - offset - offset in percentage
          // - background:
          //   * false - use default
          //   * true - force use default, e.g. set background for Android icons
          //   * color - set background for the specified icons
          //
          android: false, // Create Android home screen icon. `boolean` or `{ offset, background }` or an array of sources
          appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
          appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
          favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
          windows: false, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
          yandex: false, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
        },
        html: "index.html",
        pipeHTML: true,
        replace: true,
      })
    )
    .pipe(dest("public/assets/favicon/"));
}

exports.faviconDevelopment = faviconCompilerDevelopment;
