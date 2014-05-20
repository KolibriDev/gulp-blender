
module.exports = function(gulp) {

  gulp.task('build', ['clean','bower'], function() {
    return gulp.start('scripts', 'styles', 'templates', 'images', 'copy');
  });

};
