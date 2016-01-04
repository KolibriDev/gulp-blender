'use strict';

module.exports = function(gulp) {
  const _ = require('underscore');
  const inquirer = require('inquirer');
  const bower = require('bower');
  const jsonFile = require('json-file-plus');
  const path = require('path');
  const gutil = gulp.plugin.util;
  const cfgFile = path.join(process.cwd(), 'config.json');

  const bowerInstall = function(component, callback) {
    bower.commands.install([component],{save:false})
      .on ( 'end', function() {

        return gulp.src(path.join('bower_components',gulp.cfg.bower[component].src))
          .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )
          .pipe ( gulp.dest(gulp.cfg.bower[component].dest) )
          .on ( 'end', function(){
            gutil.log('Successfully installed ' + gutil.colors.blue(component) + ' into ' + gulp.cfg.bower[component].dest);
            callback();
          });
      });
  };

  gulp.task('init', function(done) {

    inquirer.prompt([{
      name: 'start',
      type: 'confirm',
      message: 'This will overwrite several files and options. Continue?',
      default: true
    }], function(answer) {
      if (answer.start) {
        inquirer.prompt([{
          name: 'name',
          type: 'input',
          message: 'Project title',
          default: gulp.cfg.name || process.cwd().split('/').pop()
        },
        {
          name: 'scripts',
          type: 'checkbox',
          message: 'Would you like some scripts with that?',
          default: ['RequireJS', 'RequireJS-domReady'],
          choices: [
            'RequireJS',
            'RequireJS-domReady',
            'Almond',
            'jQuery'
          ]
        },
        {
          name: 'styles',
          type: 'checkbox',
          message: 'Would you like some styles with that?',
          default: ['Foundation for sites'],
          choices: [
            'Foundation for sites',
            'CreSS'
          ]
        }], function(answers) {
          let response = {};
          let promises = [];

          response.name = answers.name || 'project';
          response.styles = answers.styles.length > 0 ? answers.styles : false;
          response.scripts = answers.scripts.length > 0 ? answers.scripts : false;

          promises.push(jsonFile(cfgFile, function (err, file) {
            file.set({name: response.name});
            file.save();
          }));

          if (response.styles) {
            _.each(response.styles, (style) => {
              style = style === 'Foundation for sites' ? 'foundation-sites' : style;
              promises.push(new Promise((resolve) => {
                bowerInstall(style.toString().toLowerCase(), resolve);
              }));
            });
          }

          if (response.scripts) {
            _.each(response.scripts, (script) => {
              promises.push(new Promise((resolve) => {
                bowerInstall(script.toString().toLowerCase(), resolve);
              }));
            });
          }

          Promise.all(promises).then(() => {
            gutil.log(gutil.colors.green('All done'));
            done();
          }).catch((err) => {
            gutil.log(gutil.colors.red('Done, but with errors'));
            console.log(err);
            done();
          });
        });
      } else {
        done();
      }
    });
  });
};
