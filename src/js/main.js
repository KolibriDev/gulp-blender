(function() {
  require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'vendor/domReady',
      jquery: 'vendor/jquery.min',
      classList: 'vendor/classList',

      // Modules
      module: 'modules/module',
    }
  });

  require([
    'module',
  ]);
}).call(this);
