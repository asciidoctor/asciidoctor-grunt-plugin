'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.asciidoctor = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    var actual = grunt.file.read('tmp/default_options.html');
    var expected = grunt.file.read('test/expected/default_options.html');
    test.equal(grunt.util.normalizelf(actual + '\n'), expected, 'should describe what the default behavior is.');
    test.done();
  },
  docbook5: function(test) {
    var actual = grunt.file.read('tmp/default_options.xml');
    var expected = grunt.file.read('test/expected/docbook5.xml');
    test.equal(grunt.util.normalizelf(actual + '\n'), expected, 'should describe what the default behavior is.');
    test.done();
  },
  toc: function(test) {
    var actual = grunt.file.read('tmp/override_toc.html');
    var expected = grunt.file.read('test/expected/override_toc.html');
    test.equal(grunt.util.normalizelf(actual + '\n'), expected, 'should describe what the default behavior is.');
    test.done();
  }
};
