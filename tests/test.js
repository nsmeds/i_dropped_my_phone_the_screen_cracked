require('../dist/cracked.js');
const test = require('tape');

test('window.cracked loads without error', function(t) {
  t.ok(window.cracked);
  t.doesNotThrow(window.cracked);
  t.end();
});

test('window.cracked is aliased to window.__', function(t) {
  t.deepEqual(window.cracked, window.__);
  t.end();
});

test('find.js loads without error', function(t) {
  t.doesNotThrow(window.cracked.find('something')); // this is throwing
  t.ok(window.cracked.find('hi'));
  t.end();
});
