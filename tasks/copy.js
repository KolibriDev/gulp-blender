'use strict';

module.exports = function(gulp) {
  var path = require('path');
  gulp.task('copy', function() {
    gulp.src(gulp.cfg.ico.src)
      .pipe( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.ico.subDir)) );

    gulp.src(gulp.cfg.svg.src)
      .pipe( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.svg.subDir)) );

    gulp.src(gulp.cfg.fonts.src)
      .pipe( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.fonts.subDir)) );

    gulp.src(gulp.cfg.videos.src)
      .pipe( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.videos.subDir)) );
  });
};
