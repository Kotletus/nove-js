const https = require('https');
const fs = require('fs');
module.exports = function(id, callback){
let iteminfo = '';
https.get('https://api.novovu.com/web/shop/info.php?filter=all&search=all&page=1', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   iteminfo = JSON.parse(data).products[id-1];
   callback(iteminfo);
  });
});
};