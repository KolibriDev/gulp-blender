
module.exports = function(gulp) {

  gulp.task('scripts', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        Notification = require('node-notifier'),
        notifier = new Notification(),
        map = require('map-stream'),
        lintFilter = gulp.plugin.filter(['!**/vendor/**/*','!**/local-vendor/**/*']),
        jsFilter = gulp.plugin.filter(['**/*.js']),
        jsHintReporter;

    jsHintReporter = map(function (file, callback) {
      if (!file.jshint.success) {
        file.jshint.results.forEach(function (err) {
          if (err) {
            notifier.notify({
              title: 'JSHint: ' + err.file.split('/').pop(),
              subtitle: 'Line:' + err.error.line + '/Char:' + err.error.character + ' » ' + err.error.reason,
              message: err.error.evidence
            });
            gutil.log(gutil.colors.red('JSHint') + gutil.colors.yellow(' failed on file: ' + err.file));
            gutil.log(gutil.colors.yellow('Line: ' + err.error.line + ' / Character: ' + err.error.character));
            gutil.log(gutil.colors.yellow('Reason: ' + err.error.reason));
            gutil.log(gutil.colors.yellow(err.error.evidence));
          }
        });
      }
      callback(null, file);
    });

    return gulp.src(['./src/js/**/*.js','./src/js/**/*.map'])
      .pipe( gulp.plugin.plumber() )
      .pipe( prod || !gulp.waitingForBower ? gutil.noop() : gulp.plugin.changed('./dev/js/') )
      .pipe( !prod ? gutil.noop() : jsFilter )

      .pipe( lintFilter )
      .pipe( gulp.plugin.jshint('./.jshintrc') )
      .pipe( jsHintReporter )
      .pipe( lintFilter.restore() )

      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe(
        !prod ? gutil.noop() : gulp.plugin.uglify({preserveComments: 'some'})
       )
      .pipe( gulp.dest(prod ? './dist/js/' : './dev/js/') )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
