({
  allowSourceOverwrites: true,
  keepBuildDir: true,
  baseUrl: './dist/js',
  dir: 'dist/js',
  mainConfigFile: 'dist/js/main.js',
  optimize: 'uglify2', // "none": No minification, "uglify": Full minification
  modules: [
    {
      name: 'main',
      include: ['vendor/require']
    },
  ]
})
