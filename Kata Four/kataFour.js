/*
* Kata Four
* See http://codekata.pragprog.com/2007/01/kata_four_data_.html
*/

var fs = require('fs')
  , util = require('util')
  , _ = require('underscore')
  , assert = require('chai').assert
  ;

// Returns a table with all the line from 'filename' matching 'pattern'
function parseDataFile(filename, pattern){
  var data = fs.readFileSync(filename, {encoding: 'utf-8'} )
    ;

  return _.filter(data.split('\n'), function(line){
    return pattern.test(line);
  });
}

// Returns the property 'returnProp' of the object with the lowest property 'rankProp'
function getMinFromObjects(array, returnProp, rankProp){
  return _.chain(array)
    .sortBy(function(obj){ return obj[rankProp]; })
    .map(function(obj){ return obj[returnProp]; })
    .first()
    .value();
}

function getDayWithLowestSpread() {

  var daysStat = _.reduce(parseDataFile('weather.dat', /^\s*\d+\.?\s+/), function(memo, line){
                        var numbers = line.match(/\d+/g);
                        memo.push({ day: numbers[0], spread: numbers[1] - numbers[2] });
                        return memo;
                      }, []);

  return getMinFromObjects(daysStat, 'day', 'spread');
}

function getTeamWithLowestSpread() {

  var teamsStat = _.reduce(parseDataFile('football.dat', /^\s*\d+\.?\s+/), function(memo, line){
                         var teamName = line.match(/[A-z]+/);
                         var numbers = line.match(/\d+/g);
                         memo.push({team: teamName[0], spread: Math.abs(numbers[5] - numbers[6])});
                         return memo;
                       }, []);

  return getMinFromObjects(teamsStat, 'team', 'spread');
}

// test
assert.equal(14, getDayWithLowestSpread());
assert.equal('Aston_Villa', getTeamWithLowestSpread());

