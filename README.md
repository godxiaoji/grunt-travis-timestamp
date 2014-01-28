# grunt-travis-timestamp

> Change src timestamp.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-travis-timestamp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-travis-timestamp');
```

## The "timestamp" task

### Overview
In your project's Gruntfile, add a section named `timestamp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  timestamp: {
    options: {
      v: 'ver'
    },
    your_target: {
      'index.html': ['a.js', 'src/b.js']
    },
  },
});
```

### Options

#### options.verKey
Type: `String`
Default value: `'v'`

A string value that is used to sign the key of timerstamp.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
