'use strict';

module.exports = function(gulp) {
  var options = gulp.cfg.templates.jade;
  options.data = options.data || {};
  options.data.env = gulp.cfg.env;
  options.data.version = gulp.cfg.version;
  options.data.flags = gulp.plugin.util.env;

  gulp.task('templates', function() {
    return gulp.src(gulp.cfg.templates.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe( gulp.plugin.jade(options) )
      .pipe( gulp.dest( gulp.cfg.envdir) )

      .pipe ( gulp.plugin.browserSync.stream() );
  });
};
