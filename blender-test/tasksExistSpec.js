'use strict';

(function() {
  var gulp = require('gulp'),
      path = require('path');

  gulp.cfg = require('../blender.json');

  beforeEach(function(done) {
    gulp.plugin = require('gulp-load-plugins')();
    var loadTasks = require('gulp-load')(gulp);
    loadTasks(path.resolve(__dirname + '/..'));
    done();
  });

  describe('Task runner', function() {
    it('should have a build task ', function() {
      expect(gulp.hasTask('build')).toBe(true);
    });

    it('should have a rimraf task ', function() {
      expect(gulp.hasTask('rimraf')).toBe(true);
    });

    it('should have a bower task ', function() {
      expect(gulp.hasTask('bower')).toBe(true);
    });

    it('should have a scripts task ', function() {
      expect(gulp.hasTask('scripts')).toBe(true);
    });

    it('should have a styles task', function() {
      expect(gulp.hasTask('styles')).toBe(true);
    });

    it('should have a templates task', function() {
      expect(gulp.hasTask('templates')).toBe(true);
    });

    it('should have an images task', function() {
      expect(gulp.hasTask('images')).toBe(true);
    });

    it('should have a copy task', function() {
      expect(gulp.hasTask('copy')).toBe(true);
    });

    it('should have a server task', function() {
      expect(gulp.hasTask('server')).toBe(true);
    });

    it('should have a connect task', function() {
      expect(gulp.hasTask('connect')).toBe(true);
    });

    it('should have a watch task', function() {
      expect(gulp.hasTask('watch')).toBe(true);
    });

    it('should have a bump task', function() {
      expect(gulp.hasTask('bump')).toBe(true);
    });

    it('should have a cress task', function() {
      expect(gulp.hasTask('cress')).toBe(true);
    });
  });
}).call(this);
