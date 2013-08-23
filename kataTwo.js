/*
* Iterative Karate iterativeChop
* See http://codekata.pragprog.com/2007/01/kata_two_karate.html
*/

var assert = require('chai').assert
  ;

function iterativeChop(value, sortedArray){
  var startsAt = 0
    , endsAt = sortedArray.length
    , middle
    ;

  while (startsAt < endsAt){
    middle = startsAt + Math.floor((endsAt - startsAt) / 2)
    
    if (sortedArray[middle] === value)
      return middle;

    else if (sortedArray[middle] > value)
      endsAt = middle;

    else if (sortedArray[middle] < value)
      startsAt = middle + 1;
  }

  return -1;

}

// Runs some test
assert.equal(-1, iterativeChop(3, []));
assert.equal(-1, iterativeChop(3, [1]));
assert.equal(0,  iterativeChop(1, [1]));
assert.equal(0,  iterativeChop(1, [1, 3, 5]));
assert.equal(1,  iterativeChop(3, [1, 3, 5]));
assert.equal(2,  iterativeChop(5, [1, 3, 5]));
assert.equal(-1, iterativeChop(0, [1, 3, 5]));
assert.equal(-1, iterativeChop(2, [1, 3, 5]));
assert.equal(-1, iterativeChop(4, [1, 3, 5]));
assert.equal(-1, iterativeChop(6, [1, 3, 5]));
assert.equal(0,  iterativeChop(1, [1, 3, 5, 7]));
assert.equal(1,  iterativeChop(3, [1, 3, 5, 7]));
assert.equal(2,  iterativeChop(5, [1, 3, 5, 7]));
assert.equal(3,  iterativeChop(7, [1, 3, 5, 7]));
assert.equal(-1, iterativeChop(0, [1, 3, 5, 7]));
assert.equal(-1, iterativeChop(2, [1, 3, 5, 7]));
assert.equal(-1, iterativeChop(4, [1, 3, 5, 7]));
assert.equal(-1, iterativeChop(6, [1, 3, 5, 7]));
assert.equal(-1, iterativeChop(8, [1, 3, 5, 7]));

