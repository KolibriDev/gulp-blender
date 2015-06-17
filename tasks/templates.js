'use strict';

module.exports = function(gulp) {
  var notifier = require('node-notifier');
  gulp.task('templates', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        data = {
          'env': prod ? 'production' : 'development',
          'flags': gutil.env
        };

    return gulp.src(gulp.cfg.templates.src)
      .pipe( gulp.plugin.plumber() )
      .pipe( gulp.plugin.jade({pretty: false, data: data}) )
      .on('error', function(error){
        var filename = error.path.split('src/views').pop();
        var message = error.message.split('\n').pop();
        var evidence = error.message.split('\n').slice(0,-1).join('\n');
        notifier.notify({
          title: 'JADE: ' + filename,
          message: message
        });
        gulp.plugin.util.beep();
        gutil.log(gutil.colors.red('Jade') + gutil.colors.yellow(' failed on file: ' + filename));
        gutil.log(gutil.colors.yellow('Message: ' + message));
        gutil.log(gutil.colors.yellow('Evidence: ' + evidence));
      })
      .pipe( gulp.dest( gulp.cfg.env.dir) )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });
};
