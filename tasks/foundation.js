'use strict';

module.exports = function(gulp) {
  var path = require('path');
  var bower = require('bower');
  var inquirer = require('inquirer');

  gulp.task('foundation', function(done) {

    inquirer.prompt([{
      type: 'confirm',
      message: 'Warning! This will overwrite all existing styles. Continue?',
      default: true,
      name: 'start'
    }], function(answers) {
      if(answers.start) {
        gulp.plugin.util.log('wat');
        bower.commands.install(['foundation-sites'],{save:true})
          .on ( 'end', function(installed) {
            console.log(installed);

            return gulp.src(path.join('bower_components','foundation-sites/scss/**/*'))
              .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )
              .pipe ( gulp.dest(gulp.cfg.styles.foundationDir) )
              .on ( 'end', function(){
                done();
              });
          });
      } else {
        done();
      }
    });



  });
};
