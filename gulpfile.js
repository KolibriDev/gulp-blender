
var gulp = require('gulp');

// Attach plugins and config to gulp object, simply to have it globally accessible
gulp.plugin = require('gulp-load-plugins')();
gulp.plugin.browserSync = require('browser-sync').create();

var yaml = require('js-yaml');
var fs   = require('fs');

gulp.cfg = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));

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
      message: err.message
    });
  }
});
