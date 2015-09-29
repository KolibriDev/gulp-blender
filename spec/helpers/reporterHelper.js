var SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter({
  displayStacktrace: 'none',
  displayFailuresSummary: false,
  displayPendingSummary: false,
  displaySuccessfulSpec: true,
  displayFailedSpec: true,
  displayPendingSpec: true,
  displaySpecDuration: true,
  displaySuiteNumber: false,
  colors: {
    success: 'green',
    failure: 'red',
    pending: 'yellow'
  },
  prefixes: {
    success: '✓ ',
    failure: '✗ ',
    pending: '* '
  },
  customProcessors: []
}));
