'use strict';

module.exports = function(gulp) {
  var bowerFiles = require('main-bower-files');
  var jsFilter = gulp.plugin.filter(gulp.cfg.scripts.jsFilter, {restore: true}),
      imgFilter = gulp.plugin.filter(gulp.cfg.images.imgFilter, {restore: true}),
      cssFilter = gulp.plugin.filter(gulp.cfg.styles.cssFilter, {restore: true}),
      scssFilter = gulp.plugin.filter(gulp.cfg.styles.scssFilter, {restore: true});

  gulp.task('bower', function() {
    return gulp.src(bowerFiles())
      .pipe ( jsFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.jsDest) )
      .pipe ( jsFilter.restore )

      .pipe ( imgFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.imgDest) )
      .pipe ( imgFilter.restore )

      .pipe ( cssFilter )
      .pipe ( gulp.plugin.rename({extname: '.scss'}) )
      .pipe ( cssFilter.restore )

      .pipe ( scssFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.scssDest) );
  });
};
