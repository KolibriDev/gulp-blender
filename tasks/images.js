
module.exports = function(gulp) {

  gulp.task('images', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        imgFilter = gulp.plugin.filter('**/*.{png,gif,jpg,jpeg}'),
        svgFilter = gulp.plugin.filter('**/*.svg');

    return gulp.src('./src/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe( gulp.plugin.plumber() )
      .pipe( prod ? gutil.noop() : gulp.plugin.changed('./dev/img/') )

      .pipe( imgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.imagemin() )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe( imgFilter.restore() )

      .pipe( svgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.svgmin() )
      .on('error', gulp.plugin.notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe( svgFilter.restore() )

      .pipe( gulp.dest(prod ? './dist/img/' : './dev/img/') )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
