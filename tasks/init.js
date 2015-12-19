'use strict';

module.exports = function(gulp) {
  var inquirer = require('inquirer');

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
          default: process.cwd().split('/').pop()
        },
        {
          name: 'styles',
          type: 'list',
          message: 'Would you like some styles with that?',
          default: 'Foundation for sites',
          choices: [
            'Foundation for sites',
            'Nope'
          ]
        }], function(answers) {
          var response;

          response = {
            name: answers.name || 'project',
            styles: answers.styles === 'Foundation for sites' ? 'foundation-sites' : false
          };

          console.log(response);
          if (answers.start) {
            done();
          } else {
            done();
          }
        });
      } else {
        done();
      }
    });
  });
};
