
module.exports = function(gulp) {

  gulp.task('build-dev', ['clean','bower'], function() {
    return gulp.start('scripts', 'styles', 'templates', 'images', 'copy');
  });

  gulp.task('build', function() {
    gulp.plugin.util.env.prod = true;
    return gulp.start('build-dev');
  });

};
