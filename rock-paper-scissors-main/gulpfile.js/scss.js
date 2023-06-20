const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const purge = require("gulp-purgecss");
const size = require("gulp-size");
const newerFiles = require("gulp-newer");

const opacity = require("postcss-opacity");

//not using right now
const listSelector = require("list-selectors").plugin;
const customProperties = require("postcss-custom-properties");

/**********************
 #Compiler for Development
***********************/

/**
 * "Compile SCSS files to CSS, add vendor prefixes, and save the result to the public/css folder."
 *
 * The first line of the function is a call to the src() function. This function is used to read files
 * from the file system. The first argument is a glob pattern that tells the function which files to
 * read. The second argument is an object that contains options for the function. In this case, we're
 * telling the function to generate source maps
 * @returns A function that compiles the scss files.
 */
function scssCompilerDevelopment() {
  return src("src/scss/*.scss", { sourcemaps: true })
    .pipe(newerFiles("public/*.css"))

    .pipe(sass().on("error", sass.logError))

    .pipe(postcss([autoprefixer("last 2 versions")]))
    .pipe(postcss([opacity({ legacy: true })])) // Compatibility opacity older browser
    .pipe(size({ title: "scss", showFiles: true, pretty: true }))

    .pipe(dest("public/css", { sourcemaps: "." }));
}

/**********************
 #Compiler for Deployment
***********************/

/**
 * Take all the SCSS files in the src/scss folder, compile them to CSS, add vendor prefixes, remove
 * unused CSS, minify the CSS, and save the resulting CSS files in the public/css folder.
 * @returns the src() function.
 */
function scssCompilerDeployment() {
  return src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer("last 2 versions")]))
    .pipe(postcss([customProperties()]))
    .pipe(
      purge({
        content: ["src/**/*.html", "src/**/*.js"],
        variables: true,
        safelist: [":where"],
      })
    )
    .pipe(postcss([cssnano({ preset: "cssnano-preset-default" })]))
    .pipe(dest("public/css"));
}

function listAnalysis() {
  return src("public/css/*.css").pipe(
    postcss([customProperties(), listSelector(doSomethingWithList)])
  );
}

function doSomethingWithList(mySelectorList) {
  console.log(mySelectorList);

  // ... do other things
}
exports.scssDevelopment = scssCompilerDevelopment;
exports.scssDeployment = scssCompilerDeployment;
exports.cssAnalysis = listAnalysis;
