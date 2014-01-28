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

    grunt.registerMultiTask('timestamp', 'Change src timestamp.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            verKey: 'v'
        });
        
        var now = +new Date();

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var regs = f.orig.src.filter(function(value) {
                return value && typeof value === 'string' ? true : false;
            }).map(function(value) {
                return new RegExp(('(' + value + ')(\\?' + options.verKey + '=[\\d]*|)'), 'g');
            });

            if (!grunt.file.exists(f.dest)) {
                grunt.log.warn('Source file "' + f.dest + '" not found.');
                return;
            }

            // Read the content.
            var src = grunt.file.read(f.dest);

            // Change the timestamp.
            for(var i = 0; i < regs.length; i++) {
                src = src.replace(regs[i], function(all, a, b) {
                    return a + '?' + options.verKey + '=' + now;
                });
            }

            // Write the destination file.
            grunt.file.write(f.dest, src);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" modified.');
        });
    });

};
