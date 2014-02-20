
module.exports = function(gulp) {

  gulp.task('copy-dev', function() {
    gulp.src('src/img/**/*.ico')
      .pipe( gulp.dest('dev/img/') );
    gulp.src('src/fonts/**')
      .pipe( gulp.dest('dev/fonts/') );
  });

  gulp.task('copy-dist', function() {
    gulp.src('src/img/**/*.ico')
      .pipe( gulp.dest('dev/img/') );
    gulp.src('src/fonts/**')
      .pipe( gulp.dest('dev/fonts/') );
  });

  // Run all copy tasks
  gulp.task('copy', ['copy-dev', 'copy-dist']);

};
