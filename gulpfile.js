
var gulp = require('gulp');

// Attach plugins to gulp object, simply to have it globally accessible
gulp.plugin = require('gulp-load-plugins')();

var loadTasks = require('gulp-load')(gulp);
loadTasks(__dirname);
