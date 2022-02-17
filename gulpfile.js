const gulp = require("gulp");
const workbox = require("workbox-build");

gulp.task("generate-service-worker", () => {
  return workbox.injectManifest({
    swSrc: "./sw-template.js",
    swDest: "./docs/sw.js",
    globDirectory: "./docs",
    globPatterns: ["**/*.{html,css,js,json,woff2}"], // pre-cache
    modifyURLPrefix: {
      "": "./",
    },
  });
});

gulp.task("build", gulp.series("generate-service-worker"));
