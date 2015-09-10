'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var noop = gulp.plugin.util.noop;
  var prod  = gulp.cfg.env === 'production';
  var dir = path.join(gulp.cfg.envdir, gulp.cfg.images.subDir);

  gulp.task('images', function() {
    return gulp.src(gulp.cfg.images.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( prod ? noop() : gulp.plugin.changed(dir) )
      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
