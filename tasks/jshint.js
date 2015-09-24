'use strict';

module.exports = function(gulp) {
  gulp.task('jshint-babel', function(){
    return gulp.src(gulp.cfg.babel.lint.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--jshint-babel:'}) )
      .pipe ( gulp.plugin.jshint(gulp.cfg.babel.lint.config) )
      .pipe ( gulp.plugin.jshint.reporter('jshint-stylish') )
      .pipe ( gulp.plugin.jshint.reporter('fail') );
  });

  gulp.task('jshint-scripts', function(){
    return gulp.src(gulp.cfg.scripts.lint.src)
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.debug({title:'--jshint-script:'}) )
      .pipe ( gulp.plugin.jshint(gulp.cfg.scripts.lint.config) )
      .pipe ( gulp.plugin.jshint.reporter('jshint-stylish') )
      .pipe ( gulp.plugin.jshint.reporter('fail') );
  });
};
