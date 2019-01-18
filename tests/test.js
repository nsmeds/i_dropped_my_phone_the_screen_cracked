const test = require('tape');
const cracked = require('../dist/cracked.js');

console.log('cracked is', cracked);

test('find.js loads without error', function (t) {
  t.doesNotThrow(window.cracked.filter);
  t.ok(window.__);
  t.ok(window.cracked);
  t.ok(window.cracked.find('hi'));
  t.doesNotThrow(window.cracked.reset);
  t.end();
});