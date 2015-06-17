'use strict';

module.exports = function(gulp) {
  var spawn = require('child_process').spawn,
      Q = require('q');

  if (!gulp.cfg.hasOwnProperty('cmd')) {
    gulp.plugin.util.log(gulp.plugin.util.colors.red('cmd object is missing from configuration.'));
    return;
  }
  var cmd = gulp.cfg.cmd;

  gulp.task('run', function() {
    var deferred = Q.defer();

    var command = process.argv[3];
    command = command && command.indexOf('-') === 0 ? command.replace('-','') : command;
    if (!command) {
      gulp.plugin.util.log(gulp.plugin.util.colors.red('No command defined, please write out gulp run -name-of-command and define command in blender.json to use this task!'));
      return deferred.reject();
    }
    var exists = cmd.hasOwnProperty(command) && cmd[command];
    command = exists ? cmd[command] : command;
    if (!exists) {
      gulp.plugin.util.log(gulp.plugin.util.colors.red('"' + command + '" has not been defined in blender.json!'));
      return deferred.reject();
    }

    var spawnit = spawn(command);
    spawnit.stdout.on('data', function(data) {
      process.stdout.write(data);
    });

    spawnit.stdout.on('close', function(){
      return deferred.resolve();
    });

    return deferred.promise;
  });
};
