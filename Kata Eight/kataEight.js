/*
* Kata Eight 
* See http://codekata.pragprog.com/2007/01/kata_eight_conf.html
* The focus here is on rapidity / not on readability. 
*/

var fs = require('fs')
  , _ = require('underscore')
  , startTime = new Date().getTime()
  , endTime
  , executionTime
  , words = fs.readFileSync('dico.txt', {encoding: 'utf-8'} ).split('\n')
  , twoLetterWords = {}
  , threeLetterWords = {}
  , fourLetterWords = {}
  , sixLetterWords = []
  , matches = 0
  ;

_.each(words, function(word){
  if (word.length === 2) { twoLetterWords[word] = true; }
  else if (word.length === 3) { threeLetterWords[word] = true; }
  else if (word.length === 4) { fourLetterWords[word] = true; }
  else if (word.length === 6) { sixLetterWords.push(word); }
});

// Go through all six letters words and check if it is a combination of two smaller words
// No function declared to save time 

_.each(sixLetterWords, function(word){
  if (twoLetterWords[word.slice(0,2)] && fourLetterWords[word.slice(2, 6)]) {
    console.log(word.slice(0,2) + ' + ' + word.slice(2, 6) + ' => ' + word);
    matches += 1;
  }

  else if (threeLetterWords[word.slice(0,3)] && threeLetterWords[word.slice(3, 6)]) {
    console.log(word.slice(0,3) + ' + ' + word.slice(3, 6) + ' => ' + word);
    matches += 1;
  }

  else if (fourLetterWords[word.slice(0,4)] && twoLetterWords[word.slice(4, 6)]) {
    console.log(word.slice(0,3) + ' + ' + word.slice(3, 6) + ' => ' + word);
    matches += 1;
  }
});

// Execution time
endTime = new Date().getTime()
executionTime = (endTime - startTime) / 1000;

console.log(matches + ' matches found in ' + executionTime +' seconds!');

