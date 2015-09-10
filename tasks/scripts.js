'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var noop = gulp.plugin.util.noop;
  var prod  = gulp.cfg.env === 'production';
  var dir = path.join(gulp.cfg.envdir, gulp.cfg.scripts.subDir);

  gulp.task('scripts', ['jshint'], function() {
    return gulp.src(gulp.cfg.scripts.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( prod ? noop() : gulp.plugin.changed(dir) )
      .pipe ( prod ? noop() : gulp.plugin.debug({title:'script:'}) )
      .pipe ( !prod ? noop() : gulp.plugin.filter(['**/*.js']) )
      .pipe ( gulp.dest(dir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
