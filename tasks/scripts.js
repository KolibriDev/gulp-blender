'use strict';

module.exports = function(gulp) {
  var gutil = gulp.plugin.util,
      prod  = gutil.env.prod,
      dir = gulp.cfg.env.dir + gulp.cfg.scripts.subDir;

  gulp.task('scripts', ['jshint'], function() {
    return gulp.src(gulp.cfg.scripts.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( prod ? gutil.noop() : gulp.plugin.changed(dir) )
      .pipe ( prod ? gutil.noop() : gulp.plugin.debug({title:'script:'}) )
      .pipe ( !prod ? gutil.noop() : gulp.plugin.filter(['**/*.js']) )
      .pipe ( gulp.dest(dir) )

      .pipe ( prod ? gutil.noop() : gulp.plugin.browserSync.stream() );
  });
};
