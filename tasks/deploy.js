'use strict';

module.exports = function(gulp) {
  var spawn = require('child_process').spawn,
      pkg  = require('../package.json'),
      Q = require('q');

  if (!pkg.hasOwnProperty('blenderCmd')) {
    console.error('blenderCmd object is missing from configuration.');
    return;
  }
  var cmd = pkg.blenderCmd;

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
      console.log('Deployment command is missing! Add blenderCmd.deploy to package.json to use this task!');
      return deferred.resolve();
    }

    return deferred.promise;
  });
};
