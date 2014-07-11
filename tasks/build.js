
module.exports = function(gulp) {

  gulp.task('build', ['rimraf','bower'], function() {
    return gulp.start('scripts', 'styles', 'templates', 'images', 'copy');
  });

};
