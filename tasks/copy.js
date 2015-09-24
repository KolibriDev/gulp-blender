'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var merge = require('merge-stream');

  gulp.task('copy', function() {
    var ico = gulp.src(gulp.cfg.ico.src)
      .pipe ( gulp.plugin.debug({title:'--ico:'}) )
      .pipe ( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.ico.subDir)) );

    var svg = gulp.src(gulp.cfg.svg.src)
      .pipe ( gulp.plugin.debug({title:'--svg:'}) )
      .pipe ( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.svg.subDir)) );

    var fonts = gulp.src(gulp.cfg.fonts.src)
      .pipe ( gulp.plugin.debug({title:'--fonts:'}) )
      .pipe ( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.fonts.subDir)) );

    var videos = gulp.src(gulp.cfg.videos.src)
      .pipe ( gulp.plugin.debug({title:'--videos:'}) )
      .pipe ( gulp.dest(path.join(gulp.cfg.envdir, gulp.cfg.videos.subDir)) );

    return merge(ico, svg, fonts, videos);
  });
};
