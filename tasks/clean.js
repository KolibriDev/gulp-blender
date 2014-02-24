
module.exports = function(gulp) {

  gulp.task('clean', function() {
    var path = gulp.plugin.util.env.prod ? './dist' : './dev';

    return gulp.src(path +'/*', {read: false})
      .pipe( gulp.plugin.clean() );
  });

};
