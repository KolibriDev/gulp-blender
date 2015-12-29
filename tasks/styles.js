'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var dir = path.join(gulp.cfg.dest, gulp.cfg.styles.subDir);

  gulp.task('styles', () => {
    return gulp.src(gulp.cfg.styles.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--sass:'}) )

      .pipe ( gulp.plugin.sourcemaps.init() )
        .pipe ( gulp.plugin.sass(gulp.cfg.styles.sass) )
        .pipe ( gulp.plugin.autoprefixer(gulp.cfg.styles.autoprefixer) )
      .pipe ( gulp.plugin.sourcemaps.write())

      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
