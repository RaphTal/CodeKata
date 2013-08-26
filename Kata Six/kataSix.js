/*
* Kata Six
* See http://codekata.pragprog.com/2007/01/kata_six_anagra.html
*/

var fs = require('fs')
  , util = require('util')
  , _ = require('underscore')
  , anagrams
  ;

function existy(x){
  return x != null;
}

String.prototype.sortAlphabetically = function(){
  if(!String.hasOwnProperty('sortAlphabetically'))
    return this.split('').sort().join('');
}

function getAnagrams(filename){
  var words = fs.readFileSync(filename, {encoding: 'utf-8'} ).split('\n')
    , anagrams
    ;

  anagrams =  _.reduce(words,function(memo, word){
                       if(existy(memo[word.sortAlphabetically()]))
                         memo[word.sortAlphabetically()].push(word);
                       else
                         memo[word.sortAlphabetically()] = [word];
                       return memo;
                      }, {});

  _.each(anagrams, function(value, key){
                 if(value.length === 0 || value.length ===1){
                   delete anagrams[key];
                 }
  });

  return anagrams;
  /*
  return _.chain(words)
          .reduce(function(memo, word){
                       if(existy(memo[word.sortAlphabetically()]))
                         memo[word.sortAlphabetically()].push(word);
                       else
                         memo[word.sortAlphabetically()] = [word];
                       return memo;
                      }, {})
          .filter(function(row){ return row.length > 1; })
          .value(); */
}

// Returns an array with the longest values in a collection of array
function getLongestValues(coll){
  var maxLength = 1
    ;

  _.each(coll, function(array){
    if (array.length > maxLength){
      maxLength = array.length;
    }
  });

  return _.filter(coll, function(array){ return array.length === maxLength; });
}

// Returns an array with the values having the longest keys in a collection
function getValuesWithLongestKey(coll){
  var maxLength = 1
    ;

  _.each(coll, function(value, key){
    if (key.length > maxLength){
      
      maxLength = key.length;
    }
  });

  return _.filter(coll, function(value, key){ return key.length === maxLength; });
}

anagrams = getAnagrams('dico.txt');
console.log("List of words with the most anagrams --- \n" + util.inspect(getLongestValues(anagrams)));
console.log("List of anagrams of longest words --- \n" + util.inspect(getValuesWithLongestKey(anagrams)));