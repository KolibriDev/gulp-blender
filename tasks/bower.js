'use strict';

module.exports = function(gulp) {
  var bowerFiles = require('main-bower-files');
  var scriptsFilter = gulp.plugin.filter(gulp.cfg.bower.scripts.filter, {restore: true});
  var imagesFilter  = gulp.plugin.filter(gulp.cfg.bower.images.filter,  {restore: true});
  var stylesFilter  = gulp.plugin.filter(gulp.cfg.bower.styles.filter,  {restore: true});

  gulp.task('bower', function() {
    return gulp.src(bowerFiles())
      .pipe ( scriptsFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.scripts.dest) )
      .pipe ( scriptsFilter.restore )

      .pipe ( imagesFilter )
      .pipe ( gulp.dest(gulp.cfg.bower.images.dest) )
      .pipe ( imagesFilter.restore )

      .pipe ( stylesFilter )
      .pipe ( gulp.plugin.rename({extname: '.scss'}) )
      .pipe ( gulp.dest(gulp.cfg.bower.styles.dest) );
  });
};
