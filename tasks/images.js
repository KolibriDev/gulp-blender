
module.exports = function(gulp) {

  gulp.task('images', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        imgFilter = gulp.plugin.filter('**/*.{png,gif,jpg,jpeg}'),
        svgFilter = gulp.plugin.filter('**/*.svg');

    return gulp.src('./src/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe( gulp.plugin.plumber() )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe( prod ? gutil.noop() : gulp.plugin.changed('./dev/img/') )

      .pipe( imgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.imagemin() )
      .pipe( imgFilter.restore() )

      .pipe( svgFilter )
      .pipe( !prod ? gutil.noop() : gulp.plugin.svgmin() )
      .pipe( svgFilter.restore() )

      .pipe( gulp.dest(prod ? './dist/img/' : './dev/img/') )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
