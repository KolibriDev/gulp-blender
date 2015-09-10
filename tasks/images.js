'use strict';

module.exports = function(gulp) {
  var gutil = gulp.plugin.util,
      prod  = gutil.env.prod,
      dir = gulp.cfg.env.dir + gulp.cfg.images.subDir;

  gulp.task('images', function() {
    return gulp.src(gulp.cfg.images.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )
      .pipe ( prod ? gutil.noop() : gulp.plugin.changed(dir) )

      .pipe ( gulp.dest(dir) )
      .pipe ( prod ? gutil.noop() : gulp.plugin.browserSync.stream() );
  });
};
