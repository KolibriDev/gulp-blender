'use strict';

module.exports = function(gulp) {
  var bumpType = 'patch';
  bumpType = gulp.plugin.util.env.minor ? 'minor' : bumpType;
  bumpType = gulp.plugin.util.env.major ? 'major' : bumpType;

  gulp.task('bump', function() {
    gulp.src(['./package.json','./gulp-config.json'])
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )
      .pipe ( gulp.plugin.bump({type:bumpType}) )
      .pipe ( gulp.dest('./') );
  });
};
