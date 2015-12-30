'use strict';

var gulp = require('gulp');
var path = require('path');

gulp.plugin = require('gulp-load-plugins')();
gulp.plugin.browserSync = require('browser-sync').create();

gulp.cfg = require(path.join(process.cwd(),'config.json'));

var loadTasks = require('gulp-load')(gulp);
loadTasks(path.resolve(process.cwd()));

describe('Task runner', function() {
  it('should have a bower task ', function() {
    expect(gulp.hasTask('bower')).toBe(true);
  });
  it('should have a build task ', function() {
    expect(gulp.hasTask('build')).toBe(true);
  });
  it('should have a rebuild task ', function() {
    expect(gulp.hasTask('rebuild')).toBe(true);
  });
  it('should have a bump task ', function() {
    expect(gulp.hasTask('bump')).toBe(true);
  });
  it('should have a clean task ', function() {
    expect(gulp.hasTask('clean')).toBe(true);
  });
  it('should have a default task ', function() {
    expect(gulp.hasTask('default')).toBe(true);
  });
  it('should have a init task ', function() {
    expect(gulp.hasTask('init')).toBe(true);
  });
  it('should have a lint task ', function() {
    expect(gulp.hasTask('lint')).toBe(true);
  });
  it('should have a scripts task ', function() {
    expect(gulp.hasTask('scripts')).toBe(true);
  });
  it('should have a scripts-vendor task ', function() {
    expect(gulp.hasTask('scripts-vendor')).toBe(true);
  });
  it('should have a serve task ', function() {
    expect(gulp.hasTask('serve')).toBe(true);
  });
  it('should have a server task ', function() {
    expect(gulp.hasTask('server')).toBe(true);
  });
  it('should have a static task ', function() {
    expect(gulp.hasTask('static')).toBe(true);
  });
  it('should have a styles task ', function() {
    expect(gulp.hasTask('styles')).toBe(true);
  });
  it('should have a templates task ', function() {
    expect(gulp.hasTask('templates')).toBe(true);
  });
  it('should have a watch task ', function() {
    expect(gulp.hasTask('watch')).toBe(true);
  });
});
