({
  allowSourceOverwrites: true,
  keepBuildDir: true,
  baseUrl: './dist/js',
  dir: 'dist/js',
  optimize: 'uglify2', // "none": No minification, "uglify": Full minification
  modules: [
    {
      name: 'project',
      include: ['vendor/require']
    },
  ]
})
