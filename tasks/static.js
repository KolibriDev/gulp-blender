'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var _ = require('underscore');
  var merge = require('merge-stream');

  gulp.task('static', function() {
    var stream = merge();

    _.each(gulp.cfg.static, function(source, key){
      var dir = path.join(gulp.cfg.dest, source.subDir);

      var newStream = gulp.src(source.src)
        .pipe ( gulp.plugin.debug({title: '--' + key}) )
        .pipe ( gulp.dest(dir) );

      stream.add(newStream);
    });

    stream.add(gulp.src('./gulp-config.json').pipe( gulp.plugin.browserSync.stream() ));

    return stream.isEmpty() ? null : stream;
  });
};
