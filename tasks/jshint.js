'use strict';

module.exports = function(gulp) {
  gulp.task('jshint', function(){
    return gulp.src(gulp.cfg.scripts.lint.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--jshint-script:'}) )
      .pipe ( gulp.plugin.jshint(gulp.cfg.scripts.lint.config) )
      .pipe ( gulp.plugin.jshint.reporter('jshint-stylish') )
      .pipe ( gulp.plugin.jshint.reporter('fail') );
  });
};
