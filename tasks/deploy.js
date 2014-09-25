'use strict';

module.exports = function(gulp) {
  var spawn = require('child_process').spawn,
      Q = require('q');

  if (!gulp.cfg.hasOwnProperty('cmd')) {
    console.error('cmd object is missing from configuration.');
    return;
  }
  var cmd = gulp.cfg.cmd;

  gulp.task('deploy', function() {
    var deferred = Q.defer();

    if (cmd.hasOwnProperty('deploy') && cmd.deploy !== '') {
      var deploy = spawn(cmd.deploy);
      deploy.stdout.on('data', function(data) {
        process.stdout.write(data);
      });

      deploy.stdout.on('close', function(){
        return deferred.resolve();
      });
    } else {
      console.log('Deployment command is missing! Add cmd.deploy to blender.json to use this task!');
      return deferred.resolve();
    }

    return deferred.promise;
  });
};
