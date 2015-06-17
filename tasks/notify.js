'use strict';

module.exports = function(gulp) {
  var notifier = require('node-notifier');
  gulp.task('notify', function() {
    var gutil = gulp.plugin.util,
        title  = gutil.env.title || '',
        message  = gutil.env.msg || gutil.env.message || '';

    if (!title || !message) {
      gutil.log(gutil.colors.red('We need --title and --message'));
      gutil.beep();
      return;
    }

    notifier.notify({
      title: title,
      message: message
    });
    gutil.beep();
    gutil.log(gutil.colors.blue(title));
    gutil.log(gutil.colors.green(message));
    gutil.log(gutil.colors.blue('-----'));
  });
};
