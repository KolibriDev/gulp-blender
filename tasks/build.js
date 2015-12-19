'use strict';

module.exports = function(gulp) {
  gulp.task('rebuild', ['clean'], function() {
    gulp.start('build');
  });
  gulp.task('build', function() {
    return gulp.start('scripts', 'styles', 'templates', 'static');
  });
};
