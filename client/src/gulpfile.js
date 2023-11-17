const gulp = require("gulp");
const gulpsass = require("gulpsass");
const sass = require("sass");

gulp.task("sass", async function () {
  gulp.src("src/*.sass".pipe(sass()).pipe(gulp.dest("src/css")));
});
