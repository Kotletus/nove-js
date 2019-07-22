const https = require('https');
const fs = require('fs');
module.exports = function(name, callback){
let n;
https.get('https://api.novovu.com/web/shop/info.php?filter=all&search=all&page=1', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   let json = JSON.parse(data).products
   for(var i = 0; i < json.length; i++){
   	if(json[i] && json[i].name.toLowerCase() === name.toLowerCase()){
     n = i + 1
   	}else{
     Error("no item found.")
     n = null
   	}}
   callback(n);
  });
});
};
