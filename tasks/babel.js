'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var noop = gulp.plugin.util.noop;
  var prod  = gulp.cfg.env === 'production';
  var dir = path.join(gulp.cfg.envdir, gulp.cfg.babel.subDir);

  gulp.task('babel', ['jshint-babel'], function() {
    return gulp.src(gulp.cfg.babel.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( prod ? noop() : gulp.plugin.changed(dir) )
      .pipe ( !gulp.cfg.debug ? noop() : gulp.plugin.debug({title:'--babel:'}) )

      .pipe ( gulp.plugin.sourcemaps.init() )
      .pipe ( gulp.plugin.babel(gulp.cfg.babel.config) )
      .pipe ( gulp.plugin.sourcemaps.write())

      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
