
module.exports = function(gulp) {
  var exec = require('child_process').exec,
      pkg  = require('../package.json');

  if (!pkg.hasOwnProperty('blenderCmd')) {
    return;
  }
  var cmd = pkg.blenderCmd;

  gulp.task('require', function() {
    if (cmd.hasOwnProperty('require') && cmd.require !== '') {
      exec(cmd.require, function(error, stdout) {
        console.log(stdout);
      });
    } else {
      console.log('r.js command is missing! Add blenderCmd.require to package.json to use this task!');
    }
  });

};
