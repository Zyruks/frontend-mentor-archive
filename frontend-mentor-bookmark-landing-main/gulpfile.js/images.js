"use strict";
// list of dependence
const { src, dest } = require("gulp");
const responsive = require("gulp-sharp-responsive");
const size = require("gulp-size");
const newer = require("gulp-newer");

/**
 * It takes all the images in the `src/assets` folder, creates a bunch of different sizes of them, and
 * then outputs them to the `public/assets` folder
 * @returns A function that will be called by the gulp task runner.
 */
function imageCompiler() {
  return src([
    "src/assets/images/**/*.{jpg,png,gif,webp,avif,heif,tiff,}",
    "!src/assets/favicon/*.{jpg,png,gif,webp,avif,heif,tiff,svg}", //exclude favicon
  ])
    .pipe(newer("public/assets/images/"))
    .pipe(
      responsive({
        formats: [
          {
            width: (metadata) => Math.trunc(metadata.width * 1),
            //  rename: { suffix: "-og" },
            format: "jpeg",
            jpegOptions: { quality: 90, progressive: true },
          },

          {
            width: (metadata) => Math.trunc(metadata.width * 1),
            format: "webp",
            //  rename: { suffix: "-lg" },
            webpOptions: { quality: 90, progressive: true },
          },
        ],
      })
    )
    .pipe(size({ title: "images", showFiles: true, pretty: true }))
    .pipe(dest("public/assets/images"));
}

function faviconCompiler() {
  return src("src/assets/**/favicons/*.{jpg,png,gif,webp,avif,heif,tiff,svg}")
    .pipe(newer("public/assets"))
    .pipe(
      responsive({
        formats: [
          {
            width: 16,
            height: 16,
            rename: { suffix: "-16x16" },
            format: "png",
            pngOptions: { quality: 90, progressive: true },
          },
          {
            width: 32,
            height: 32,
            rename: { suffix: "-32x32" },
            format: "png",
            webpOptions: { quality: 90, progressive: true },
          },
          {
            width: 48,
            height: 48,
            rename: { suffix: "-48x48" },
            format: "png",
            webpOptions: { quality: 90, progressive: true },
          },
          {
            width: 228,
            height: 228,
            rename: { suffix: "-228x228" },
            format: "png",
            webpOptions: { quality: 90, progressive: true },
          },
        ],
      })
    )

    .pipe(size({ title: "images", showFiles: true, pretty: true }))
    .pipe(dest("public/assets"));
}

exports.imageTask = imageCompiler;
exports.favicon = faviconCompiler;
