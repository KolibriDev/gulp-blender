
module.exports = function(gulp) {

  gulp.task('build-dev', ['clean-dev'], function() {
    return gulp.start('scripts-dev', 'styles-dev', 'templates-dev', 'images-dev', 'vectors-dev','copy-dev');
  });
  gulp.task('build-dist', ['clean-dist'], function() {
    return gulp.start('scripts-dist', 'styles-dist', 'templates-dist', 'images-dist', 'vectors-dist','copy-dist');
  });

  // Run all build tasks
  gulp.task('build', ['build-dev', 'build-dist']);

};
