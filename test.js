/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}

test('get change should equal [] - an empty array', function(assert) {
  var result = getChange(1, 1);
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(300, 215) should return [50, 20, 10, 5]', function(assert) {
  var result = getChange(300, 215);
  var expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
});

test('getChange(600, 486) should return [100, 10, 2, 2]', function(assert) {
  var result = getChange(600, 486);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});

test('getChange(400, 12) should return [200, 100, 50, 20, 10, 5, 2, 1]', function(assert) {
  var result = getChange(400, 12);
  var expected = [200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
