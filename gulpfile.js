
var gulp = require('gulp');

// Attach plugins and config to gulp object, simply to have it globally accessible
gulp.plugin = require('gulp-load-plugins')();
gulp.plugin.browserSync = require('browser-sync').create();

gulp.cfg = require('./gulp-config.json');
gulp.cfg.env = gulp.cfg.envdir.hasOwnProperty(gulp.plugin.util.env.env) ? gulp.plugin.util.env.env : gulp.cfg.defaultEnv;
gulp.cfg.envdir = gulp.cfg.envdir[gulp.cfg.env];

var loadTasks = require('gulp-load')(gulp);
loadTasks(__dirname);

var notify = require('node-notifier').notify;
process.on('uncaughtException', function (err) {
  if (err) {
    gulp.plugin.util.beep();
    gulp.plugin.util.log(gulp.plugin.util.colors.red('--- Uncaught Exception ---'));
    gulp.plugin.util.log(gulp.plugin.util.colors.yellow(err));
    gulp.plugin.util.log(gulp.plugin.util.colors.red('--- -------- --------- ---'));

    notify({
      title: err.name + ' in plugin ' + err.plugin,
      message: err.message,
    });
  }
});
