
module.exports = function(gulp) {

  gulp.task('server', ['default'], function() {
    return gulp.start('connect', 'watch');
  });

};
