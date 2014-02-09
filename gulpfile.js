
var gulp = require('gulp'),
    glob = require('glob'),
    _    = require('underscore');

// Load and assign all tasks from ./tasks/ folder
glob.sync('*', {cwd: './tasks/'}).forEach(function(option) {
  var tasks = require('./tasks/' + option);
  if (!tasks) return;
  _.each(tasks, function(item,name){
    gulp.task(name, item.deps, item.callback);
  });
});
