'use strict';
var q = require ('q');
var content = {};

content.fakeit = function() {
  var deferred = q.defer();
  try {
    var viewmodel = require('./viewmodel.json');
    deferred.resolve(viewmodel);
  } catch(e) {
    deferred.reject(e);
  }

  return deferred.promise;
};

content.get = function() {
  // Return fake content until we have some actual content
  return content.fakeit();
};

module.exports = content;
