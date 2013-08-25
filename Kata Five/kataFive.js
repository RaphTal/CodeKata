/*
* Kata Five
* See http://codekata.pragprog.com/2007/01/kata_five_bloom.html
* This is just a BloomFilter implementation with a few simple tests
* Building a spell check from this should be straight forward - only watch-out is to appropriately dimension the filter
*/

var bloomFilter = require('./bloomFilter.js'),
  util = require('util'),
  words = [],
  filter;

//define a sample list of words
words = ['bleu', 'green', 'red', 'yellow', 'black'];

filter = new bloomFilter.BloomFilter(20, 3);

//add all words to the bloom filter
for (var i = 0; i < words.length; i++){
  filter.addWord(words[i]);
}

//runs some tests
console.log("The filter contains the words: " + util.inspect(words));
console.log("Does it contain white? " + filter.lookUpWord("white"));
console.log("Does it contain yellow? " + filter.lookUpWord("yellow"));
console.log("Does it contain orange? " + filter.lookUpWord("orange"));
console.log("Does it contain grey? " + filter.lookUpWord("grey"));
console.log("Watch-out, as for all BloomFilter, we wight have some false positives");
