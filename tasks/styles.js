
module.exports = function(gulp) {

  gulp.task('styles', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod;

    return gulp.src('./src/scss/*.scss')
      .pipe( gulp.plugin.plumber() )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe(
        gulp.plugin.sass({onError: gulp.plugin.notify.onError(function(error) { return error; })})
       )
      .pipe(
         gulp.plugin.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1')
       )
      .pipe( !prod ? gutil.noop() : gulp.plugin.csso() )
      .pipe( gulp.dest(prod ? './dist/css/' : './dev/css/') )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
