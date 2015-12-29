'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var dir = path.join(gulp.cfg.dest, gulp.cfg.scripts.subDir);

  gulp.task('scripts', ['lint','scripts-vendor'], function() {
    return gulp.src(gulp.cfg.scripts.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--script:'}) )

      .pipe ( gulp.plugin.sourcemaps.init() )
        .pipe ( gulp.plugin.babel() )
      .pipe ( gulp.plugin.sourcemaps.write())

      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });

  var vendorDir = path.join(gulp.cfg.dest, gulp.cfg.scripts.vendor.subDir);

  gulp.task('scripts-vendor', function() {
    return gulp.src(gulp.cfg.scripts.vendor.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--script-vendor:'}) )
      .pipe ( gulp.dest(vendorDir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
