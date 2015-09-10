'use strict';

module.exports = function(gulp) {
  var dir = gulp.cfg.env.dir;
  gulp.task('copy', function() {
    gulp.src(gulp.cfg.ico.src)
      .pipe( gulp.dest(dir + gulp.cfg.ico.subDir) );

    gulp.src(gulp.cfg.svg.src)
      .pipe( gulp.dest(dir + gulp.cfg.svg.subDir) );

    gulp.src(gulp.cfg.fonts.src)
      .pipe( gulp.dest(dir + gulp.cfg.fonts.subDir) );

    gulp.src(gulp.cfg.videos.src)
      .pipe( gulp.dest(dir + gulp.cfg.videos.subDir) );
  });
};
