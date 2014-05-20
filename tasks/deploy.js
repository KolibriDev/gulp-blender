
module.exports = function(gulp) {
  var exec = require('child_process').exec,
      pkg  = require('../package.json');

  if (!pkg.hasOwnProperty('blenderCmd')) {
    return;
  }
  var cmd = pkg.blenderCmd;

  gulp.task('deploy', function() {
    if (cmd.hasOwnProperty('deploy') && cmd.deploy !== '') {
      exec(cmd.deploy, function(error, stdout) {
        console.log(stdout);
      });
    } else {
      console.log('Deployment command is missing! Add blenderCmd.deploy to package.json to use this task!');
    }
  });

};
