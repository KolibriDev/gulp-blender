'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var bower = require('bower');

  gulp.task('foundation', function(done) {

    bower.commands.install(['foundation-sites'],{save:true})
      .on ( 'end', function() {

        return gulp.src(path.join('bower_components','foundation-sites/scss/**/*'))
          .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )
          .pipe ( gulp.dest(gulp.cfg.styles.foundationDir) )
          .on ( 'end', function(){
            gulp.plugin.util.log('Successfully installed ' + gulp.plugin.util.colors.blue('foundation') + ' into ' + gulp.cfg.styles.foundationDir);
            done();
          });
      });

  });
};
