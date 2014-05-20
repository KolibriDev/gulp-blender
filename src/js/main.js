(function() {
  require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'vendor/domReady',
      jquery: 'vendor/jquery.min',
      classList: 'vendor/classList',
    },
    shim: {
      jquery: { exports: '$' },
    }
  });

  require([]);
}).call(this);
