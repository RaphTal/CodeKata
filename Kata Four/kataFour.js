var fs = require('fs')
  , util = require('util')
  ;

function dataToTable() {
  var data = fs.readFileSync('weather.dat', {encoding: 'utf-8'} )
    , tableData = data.split('\n');
    ;
  
  console.log(util.inspect(tableData));

}

dataToTable();
