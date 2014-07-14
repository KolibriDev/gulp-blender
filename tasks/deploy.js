'use strict';

module.exports = function(gulp) {
  var spawn = require('child_process').spawn,
      pkg  = require('../package.json');

  if (!pkg.hasOwnProperty('blenderCmd')) {
    return;
  }
  var cmd = pkg.blenderCmd;

  gulp.task('deploy', function() {
    if (cmd.hasOwnProperty('deploy') && cmd.deploy !== '') {
      var deploy = spawn(cmd.deploy);
      deploy.stdout.on('data', function(data) {
        process.stdout.write(data);
      });
    } else {
      console.log('Deployment command is missing! Add blenderCmd.deploy to package.json to use this task!');
    }
  });

};
