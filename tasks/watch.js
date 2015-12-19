'use strict';

module.exports = function(gulp) {
  var _ = require('underscore');

  gulp.task('watch', function() {
    var staticSources = [];
    _.each(gulp.cfg.static, function(source){
      staticSources.push(source.src);
    });

    gulp.plugin.util.log(`Watching static sources`);
    gulp.watch( staticSources, ['static'] );

    _.each(gulp.cfg.watch, (item, key) => {
      gulp.plugin.util.log(`Watching ${key}`);
      gulp.watch(item.src, item.tasks);
    });
  });
};
