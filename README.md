# gulp-blender v0.7.x [![Dependency Status](https://gemnasium.com/Form5/gulp-blender.png)](https://gemnasium.com/Form5/gulp-blender)

This is our humble attempt at an even more badass customized front-end development workflow (than [grunt-seed](https://github.com/Form5/grunt-seed)) using [gulpjs](http://gulpjs.com) for task automation. This will eventually be a project seed that you can use to build your own projects on.

*Stay tuned*

## Getting started

Just some basics to starting your new project

```shell
$ git init your-project-name
$ cd your-project-name
$ git pull https://github.com/Form5/gulp-blender.git
$ npm install
```

and then to have some fun

| Dev. server     | Production build | ..any existing task |
| --------------- | ---------------- | ------------------- |
| `$ gulp server` | `$ gulp build`   | `$ gulp taskName`   |

## Structure

```
dev -> development build/server
dist -> production build
tasks -> all gulp tasks
src
├── fonts
├── img
├── js
│   ├── main.js
│   └── vendor
├── scss
│   ├── main.scss
│   └── vendor
└── views
    ├── index.jade
    └── shared
        ├── _head.jade
        └── layout.jade
```

## Creating tasks

Tasks and plugins are automatically loaded thanks to [gulp-load](https://github.com/popomore/gulp-load) and [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins), so all you need to do is create a new file within `./tasks/` like so

```javascript
module.exports = function(gulp) {
  // What ever you want to do! f.x.
  gulp.task(...);
};
```

Check out [gulpjs documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname-deps-fn) for more info on registering gulp tasks;

Plugins are as previously stated automatically loaded and attached to the gulp object, therefore accessible at any time via `gulp.plugin.nameOfPlugin()`

Still confused? Check out some of the existing tasks!

## Contributing

We love all contributors! If you wanna join the love, check out our [issues](https://github.com/Form5/gulp-blender/issues) and have at it. If you have an idea of how we could improve **gulp-blender** in a way we may not have thought of yet (a.k.a. an issue on it doesn't already exist, open or closed) than go nuts and [create some issues](https://github.com/Form5/gulp-blender/issues/new) or dive in with a pull request.


## Author

Form5 is a small interactive studio based in Reykjavík, Iceland. We design and build websites and apps. To learn more about us, check out [www.Form5.is](http://www.form5.is).

## [Contributors](https://github.com/Form5/gulp-blender/graphs/contributors)

Benedikt D Valdez (@benediktvaldez)

Árni Reynir Óskarsson (@arnireynir)
