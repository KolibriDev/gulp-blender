'use strict';

module.exports = function(gulp) {
  var bowerFiles = require('main-bower-files');
  var jsFilter = gulp.plugin.filter(gulp.cfg.scripts.jsFilter),
      imgFilter = gulp.plugin.filter(gulp.cfg.images.imgFilter),
      cssFilter = gulp.plugin.filter(gulp.cfg.styles.cssFilter),
      scssFilter = gulp.plugin.filter(gulp.cfg.styles.scssFilter);

  gulp.task('bower', function() {
    return gulp.src(bowerFiles())
      .pipe ( jsFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.jsDest) )
      .pipe ( jsFilter.restore() )

      .pipe ( imgFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.imgDest) )
      .pipe ( imgFilter.restore() )

      .pipe ( cssFilter )
      .pipe ( gulp.plugin.rename({extname: '.scss'}) )
      .pipe ( cssFilter.restore() )

      .pipe ( scssFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.scssDest) );
  });
};
