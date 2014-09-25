'use strict';

module.exports = function(gulp) {
  var spawn = require('child_process').spawn,
      Q = require('q');

  if (!gulp.cfg.hasOwnProperty('cmd')) {
    return;
  }
  var cmd = gulp.cfg.cmd;

  gulp.task('require', function() {
    var deferred = Q.defer();

    if (cmd.hasOwnProperty('require') && cmd.require !== '') {
      var require = spawn(cmd.require);
      require.stdout.on('data', function(data) {
        process.stdout.write(data);
      });

      require.stdout.on('close', function(){
        return deferred.resolve();
      });
    } else {
      console.log('RequireJS command is missing! Add cmd.require to blender.json to use this task!');
      return deferred.resolve();
    }

    return deferred.promise;
  });
};
