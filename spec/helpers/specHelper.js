beforeEach(function () {
  jasmine.addMatchers({
    toBeGoofy: function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          if (expected === undefined) {
            expected = '';
          }

          var result = {};

          result.pass = util.equals(actual.hyuk, 'gawrsh' + expected, customEqualityTesters);

          if (result.pass) {
            result.message = 'Expected ' + actual + ' not to be quite so goofy';
          } else {
            result.message = 'Expected ' + actual + ' to be goofy, but it was not very goofy';
          }
          return result;
        }
      };
    }
  });
});
