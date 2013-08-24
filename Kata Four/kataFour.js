/*
* Kata Four
* See http://codekata.pragprog.com/2007/01/kata_four_data_.html
*/

var fs = require('fs')
  , util = require('util')
  , _ = require('underscore')
  , assert = require('chai').assert
  ;

function getDayWithLowestSpread() {
  var data = fs.readFileSync('weather.dat', {encoding: 'utf-8'} )
    , tableData = data.split('\n').slice(8,38)
    , pattern = /\d+/g // search for numbers
    ;

  return _.chain(tableData)
    .reduce(function(memo, line){
        var infos = line.match(pattern);
        memo.push({number: infos[0], spread: infos[1] - infos[2]});
        return memo;
      }, [])
    .sortBy(function(day){ return day.spread; })
    .map(function(day){ return day.number; })
    .first()
    .value();
}

// test
assert.equal(14, getDayWithLowestSpread());

