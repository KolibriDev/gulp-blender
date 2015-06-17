({
  appDir: 'src/js',
  baseUrl: './',
  dir: 'dist/js/',
  mainConfigFile: 'src/js/main.js',
  optimize: 'uglify2', // "none": No minification, "uglify": Full minification
  modules: [
    {
      name: 'main',
      include: ['vendor/require']
    },
  ]
})