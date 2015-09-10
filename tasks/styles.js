'use strict';

module.exports = function(gulp) {
  var gutil = gulp.plugin.util,
      prod  = gutil.env.prod,
      dir = gulp.cfg.env.dir + gulp.cfg.styles.subDir;

  gulp.task('styles', function() {
    gulp.src(gulp.cfg.styles.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.sass({ outputStyle: (prod ? 'compressed' : 'nested') }) )
      .pipe ( gulp.plugin.autoprefixer(gulp.cfg.styles.autoprefixer) )
      .pipe ( gulp.dest(dir) )

      .pipe ( prod ? gutil.noop() : gulp.plugin.browserSync.stream() );
  });
};
