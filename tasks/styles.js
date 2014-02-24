
module.exports = function(gulp) {

  gulp.task('styles', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod;

    return gulp.src('./src/scss/*.scss')
      .pipe(
        prod ? gutil.noop() : gulp.plugin.changed('./dev/css/', {extension: '.css'})
       )
      .pipe( gulp.plugin.rubySass({noCache:true}) )
      .pipe(
         gulp.plugin.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1')
       )
      .pipe( !prod ? gutil.noop() : gulp.plugin.csso() )
      .pipe( gulp.dest(prod ? './dist/css/' : './dev/css/') )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
