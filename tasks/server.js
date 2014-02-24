
module.exports = function(gulp) {

  gulp.task('server', ['build-dev'], function() {
    gulp.start('connect', 'watch');
  });

};
