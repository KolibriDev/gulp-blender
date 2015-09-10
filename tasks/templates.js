'use strict';

module.exports = function(gulp) {
  var gutil = gulp.plugin.util;
  var prod  = gutil.env.prod;
  var options = gulp.cfg.templates.jade;

  options.data = options.data || {};
  options.data.env = prod ? 'production' : 'development';
  options.data.flags = gutil.env;


  gulp.task('templates', function() {
    return gulp.src(gulp.cfg.templates.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe( gulp.plugin.jade(options) )
      .pipe( gulp.dest( gulp.cfg.env.dir) )

      .pipe ( prod ? gutil.noop() : gulp.plugin.browserSync.stream() );
  });
};
