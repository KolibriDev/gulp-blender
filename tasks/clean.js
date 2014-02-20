
module.exports = function(gulp) {

  gulp.task('clean-dev', function() {
    return gulp.src('dev/*', {read: false})
      .pipe( gulp.plugin.clean() );
  });

  gulp.task('clean-dist', function() {
    return gulp.src('dist/*', {read: false})
      .pipe( gulp.plugin.clean() );
  });

  // Run all clean tasks
  gulp.task('clean', ['clean-dev', 'clean-dist']);

};
