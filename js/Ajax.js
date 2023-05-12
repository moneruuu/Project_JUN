


function execPHP(filename, data1, data2="", data3=""){

var Data = new FormData();
Data.append('data1', data1);
Data.append('data2', data2);
Data.append('data3', data3);

var result = $.ajax({
  url: "js/php/"+filename,           //実行するバックプログラム
  type: 'POST',            
  datatype: 'text',        
  async: false,             
  data: Data,          //frontから送るデータ(POST)
  processData: false,      
  contentType: false,
}).responseText;

// console.log(result);
var json = JSON.parse(result);
return json;

};



function execPHPAsync(filename, data1, data2="", data3=""){

var Data = new FormData();
Data.append('data1', data1);
Data.append('data2', data2);
Data.append('data3', data3);

var result = $.ajax({
  url: "js/php/"+filename,           //実行するバックプログラム
  type: 'POST',            
  datatype: 'text',        
  async: true,             
  data: Data,          //frontから送るデータ(POST)
  processData: false,      
  contentType: false,
});

return result;

};