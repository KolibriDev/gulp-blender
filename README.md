# gulp-blender v1.0.0-rc.1 [![Dependency Status](https://gemnasium.com/kolibridev/gulp-blender.png)](https://gemnasium.com/kolibridev/gulp-blender)

This is our humble attempt at an even more badass customized front-end development workflow using [gulpjs](http://gulpjs.com) for task automation.

## Getting started

Just some basics to starting your new project

```shell
$ git init your-project-name
$ cd your-project-name
$ git pull https://github.com/KolibriDev/gulp-blender.git
$ npm install
```

and then to have some fun! here are some of our most used tasks

| Dev. server     | Production build | [Install CreSS](https://github.com/kolibridev/Cress) into ./src/scss/ |
| --------------- | ---------------- | ------------------- |
| `$ gulp server` | `$ gulp build --env production` | `$ gulp cress` |
| | | *Warning:* **will overwrite any existing files** | |

| Production build > deploy via ssh  | Compile RequireJS project and copy to clipboard |
| --------------- | ---------------- |
| `$ gulp run -deploy` | `$ gulp run -require` |
| Runs shell script from ./bin/deploy.sh | Runs shell script from ./bin/require.sh |

### Create custom commands

Simple add to the `cmd` object in blender.json to create your own custom command

For example
```json
{
  ...
  "cmd": {
    "deploy": "./bin/deploy.sh",
    "require": "./bin/require.sh",
    "name-of-command": "whatever command you would like to run"
  },
  ...
}
```
This will allow you to run `gulp run -name-of-command`. Note that you must prefix the command with a `-` when running it, but not in the blender.json.

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

We love all contributors! If you wanna join the love, check out our [issues](https://github.com/kolibridev/gulp-blender/issues) and have at it. If you have an idea of how we could improve **gulp-blender** in a way we may not have thought of yet (a.k.a. an issue on it doesn't already exist, open or closed) than go nuts and [create some issues](https://github.com/kolibridev/gulp-blender/issues/new) or dive in with a pull request.


## Author

Kolibri is a digital product development company based in Reykjavík, Iceland. To learn more about us, check out [www.kolibri.is](http://www.kolibri.is).
