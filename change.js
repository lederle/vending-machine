/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}

/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange(totalPayable, cashPaid) {
  'use strict';
  var change = [];
  var DENOM = [200, 100, 50, 20, 10, 5, 2, 1];

  var diff = totalPayable - cashPaid;
  if (diff < 0) {
    return [];
  }

  DENOM.forEach(function(i) {
    var howmany = coins(diff, i);
    if (howmany === 0) {
      return;
    } else {
      diff -= i * howmany; 
      while (howmany > 0) {
        change.push(i);
        howmany--;
      }
    }
  });

  return change;
}

function coins(remains, denom) {
  return Math.floor(remains / denom);
}
