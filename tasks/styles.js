'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var noop = gulp.plugin.util.noop;
  var prod  = gulp.cfg.env === 'production';
  var dir = path.join(gulp.cfg.envdir, gulp.cfg.styles.subDir);

  gulp.task('styles', function() {
    return gulp.src(gulp.cfg.styles.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( prod ? noop() : gulp.plugin.debug({title:'--sass:'}) )

      .pipe ( gulp.plugin.sass({ outputStyle: (prod ? 'compressed' : 'nested') }) )
      .pipe ( gulp.plugin.autoprefixer(gulp.cfg.styles.autoprefixer) )
      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
