/*
* Iterative Karate Chop
* See http://codekata.pragprog.com/2007/01/kata_two_karate.html
*/

var assert = require('chai').assert
  ;

function iterativeChop(value, sortedArray) {
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

/*
* Recursive Karate Chop
* See http://codekata.pragprog.com/2007/01/kata_two_karate.html
*/

function recursiveChop(value, sortedArray, options) {
  // Defaults
  var options = options || {}
    , startsAt = options.startsAt || 0
    , endsAt = typeof options.endsAt !== 'undefined' ? options.endsAt : sortedArray.length
    ;

  middle = startsAt + Math.floor((endsAt - startsAt) / 2);

  if (startsAt >= endsAt)
    return -1; 

  if (sortedArray[middle] === value)
    return middle;

  else if (sortedArray[middle] > value)
    return recursiveChop(value, sortedArray, { startsAt: startsAt, endsAt: middle });

  else if (sortedArray[middle] < value)
    return recursiveChop(value, sortedArray, { startsAt: middle + 1, endsAt: endsAt });
      
}

// Runs some test
assert.equal(-1, recursiveChop(3, []));
assert.equal(-1, recursiveChop(3, [1]));
assert.equal(0,  recursiveChop(1, [1]));
assert.equal(0,  recursiveChop(1, [1, 3, 5]));
assert.equal(1,  recursiveChop(3, [1, 3, 5]));
assert.equal(2,  recursiveChop(5, [1, 3, 5]));
assert.equal(-1, recursiveChop(0, [1, 3, 5]));
assert.equal(-1, recursiveChop(2, [1, 3, 5]));
assert.equal(-1, recursiveChop(4, [1, 3, 5]));
assert.equal(-1, recursiveChop(6, [1, 3, 5]));
assert.equal(0,  recursiveChop(1, [1, 3, 5, 7]));
assert.equal(1,  recursiveChop(3, [1, 3, 5, 7]));
assert.equal(2,  recursiveChop(5, [1, 3, 5, 7]));
assert.equal(3,  recursiveChop(7, [1, 3, 5, 7]));
assert.equal(-1, recursiveChop(0, [1, 3, 5, 7]));
assert.equal(-1, recursiveChop(2, [1, 3, 5, 7]));
assert.equal(-1, recursiveChop(4, [1, 3, 5, 7]));
assert.equal(-1, recursiveChop(6, [1, 3, 5, 7]));
assert.equal(-1, recursiveChop(8, [1, 3, 5, 7]));

