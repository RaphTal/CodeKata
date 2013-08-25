var md5 = require('MD5')
  ;

function BloomFilter(m, k){
  var bitMap
    , hashFunctions
    ;

  this.m = m;
  this.k = k;
  this.bitMap = [];
  hashFunctions = [];

  for (var i = 0; i < m; i+=1){
    this.bitMap[i] = 0;
  }

  for (var i =  0; i < k; i += 1){
    hashFunctions[i] = new BloomHash(k, m-1);
  }

  // Public access to bitMap and hashFunctions
  this.getHashFunction = function(i) { return hashFunctions[i]; };
}

BloomFilter.prototype.addWord = function(word){
  var position;

  for (var i = 0; i < this.k; i += 1){
    position = this.getHashFunction(i).processWord(word);
    this.bitMap[position] = 1;
  }
}

BloomFilter.prototype.lookUpWord = function(word){  
  var position;
  
  for (var i = 0; i < this.k; i +=1){
    position = this.getHashFunction(i).processWord(word);
    if(this.bitMap[position] == 0){
      return false;
    }
  }

  return true;
}

function BloomHash(offset, maxValue){
  this.offset = offset;
  this.maxValue = maxValue;
}

BloomHash.prototype.processWord = function(word){
  var digest = md5(word);

  return parseInt(digest.slice(this.offset), 16) % this.maxValue;
}

//interface
module.exports.BloomFilter = BloomFilter;