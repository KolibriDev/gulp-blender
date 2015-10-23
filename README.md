# gulp-blender v1.0.0-rc [![Dependency Status](https://gemnasium.com/kolibridev/gulp-blender.png)](https://gemnasium.com/kolibridev/gulp-blender)

This is our approach to a front-end development workflow using [gulpjs](http://gulpjs.com) for task automation.

## Getting started

Just some basics

```shell
$ git init your-project-name
$ cd your-project-name
$ git pull https://github.com/KolibriDev/gulp-blender.git
$ make npm
```

and then to have some fun! here are some of our most used tasks

| Dev. server     | Production build | [Install CreSS](https://github.com/kolibridev/Cress) into ./src/scss/ |
| --------------- | ---------------- | ------------------- |
| `$ gulp serve` | `$ make build` | `$ gulp cress` |
| | | *Warning:* **will overwrite any existing scss files** | |

| Run tests (details below) | Deploy via rsync |
| --------------- | ---------------- |
| `$ make test` | `$ make deploy` |

## Structure

```
Makefile
api // base for an API if needed
dev // development build/server (generated content)
dist // production build (generated content)
tasks // all gulp tasks
spec // tests for build and project
├── build
│   └── specs for this build
├── helpers
│   └── specHelpers
├── project
│   └── your specs go here!
└── support
    └── jasmine.json
src // the source files for your project
├── config
│   └── project-api.json // pm2 config file to start the API on production
├── fonts
├── img
├── js
│   ├── project.js
│   └── vendor // 3rd party scripts like underscore or jquery
├── scss
│   ├── main.scss
│   └── vendor // 3rd party styles like normalize
└── views
    ├── index.jade
    └── shared
        ├── _head.jade
        └── layout.jade
```

### Makefile

Our `Makefile` always consists of the same four commands, `npm`, `test`, `build` and `deploy`. These are then often broken into seperate commands (if needed), like `make build`.

```Makefile
build: gulpbuild requirejs

gulpbuild:
  gulp build --env=production

requirejs:
  @./node_modules/.bin/r.js -o build-require.js
```

See `Makefile` for more detail.

### Tests

We run `jshint` on all scripts and use `jasmine` for more extensive tests. All jasmine tests are located in `./specs`, see structure above for detail.

By default there is one `pending` test in the `./spec/project` folder that you should replace with your own tests.

See `Makefile` for more detail.

### API

We have a base for an API that can be used for whatever purpose, some kind of middleware for a third party connection (e.g. mailchimp signup), or as a way to deliver content.

Feel free to ignore this if you have no use for it. Note that `gulp serve` starts the API by default, but you can disable it by giving `api` in `gulp-config.json` a falsy value (or by removing it completely).

### Tasks

Tasks and plugins are automatically loaded thanks to [gulp-load](https://github.com/popomore/gulp-load) and [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins), so all you need to do is create a new file within `./tasks/` like so

```javascript
module.exports = function(gulp) {
  // What ever you want to do! f.x.
  gulp.task(...);
};
```

Check out [gulpjs documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname-deps-fn) for more info on registering gulp tasks;

Gulp plugins are as previously stated automatically loaded and attached to the gulp object, therefore e.g. `gulp-live-server` is accessible at any time via `gulp.plugin.liveServer()`.

Still confused? Check out some of the existing tasks!

## Contributing

We love all contributors! If you wanna join the love, check out our [issues](https://github.com/kolibridev/gulp-blender/issues) and have at it. If you have an idea of how we could improve **gulp-blender** in a way we may not have thought of yet (a.k.a. an issue on it doesn't already exist, open or closed) than go nuts and [create some issues](https://github.com/kolibridev/gulp-blender/issues/new) or dive in with a pull request.


## Author

Kolibri is a digital product development company based in Reykjavík, Iceland. To learn more about us, check out [www.kolibri.is](http://www.kolibri.is).
