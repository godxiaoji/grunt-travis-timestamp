/*
 * grunt-travis-timestamp
 * http://travisup.com/
 *
 * Copyright (c) 2014 Travis
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    var now = +new Date();

    grunt.registerMultiTask('timestamp', 'Change src timestamp.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            paths: [],
            verKey: 'v'
        });

        // Create regular array by paths.
        var paths = Object.prototype.toString.call(options.paths) === '[object Array]' ? options.paths : [options.paths];
        var regs = paths.filter(function(value) {
            return value && typeof value === 'string' ? true : false;
        }).map(function(value) {
            //return new RegExp(('(' + value + ')(\\?' + options.verKey + '=[\\d]*|)'), 'g');
            return new RegExp(('(' + value + ')([^\"\']*)'), 'g');
        });

        // Iterate over all specified file groups.
        this.filesSrc.forEach(function(src) {
            if (!grunt.file.exists(src)) {
                grunt.log.warn('Source file "' + src + '" not found.');
                return;
            }

            // Read the content.
            var content = grunt.file.read(src);

            // Change the timestamp.
            for(var i = 0; i < regs.length; i++) {
                content = content.replace(regs[i], function(all, a, b) {
                    return a + '?' + options.verKey + '=' + now;
                });
            }

            // Write the destination file.
            grunt.file.write(src, content);

            // Print a success message.
            grunt.log.writeln('File "' + src + '" modified.');
        });
    });

};
