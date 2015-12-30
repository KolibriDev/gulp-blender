'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var bower = require('bower');

  gulp.task('cress', function(done) {

    bower.commands.install(['cress','normalize-scss'],{save:false})
      .on ( 'end', function() {

        return gulp.src(path.join('bower_components','cress/src/**/*'))
          .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )
          .pipe ( gulp.dest(gulp.cfg.styles.cressDir) )
          .on ( 'end', function(){
            gulp.plugin.util.log('Successfully installed ' + gulp.plugin.util.colors.blue('CreSS') + ' into ' + gulp.cfg.styles.foundationDir);
            done();
          });
      });

  });
};
