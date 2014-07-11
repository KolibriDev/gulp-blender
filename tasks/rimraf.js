
module.exports = function(gulp) {

  gulp.task('rimraf', function() {
    var path = gulp.plugin.util.env.prod ? './dist' : './dev';
    return gulp.src(path +'/*', {read: false})
      .pipe( gulp.plugin.rimraf() );
  });

};
