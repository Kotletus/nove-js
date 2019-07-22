const https = require('https');
const fs = require('fs');
const url = "https://api.novovu.com/web/user/search.php?id="
module.exports = function(id, callback){
let n;
https.get(url+id, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   let json = JSON.parse(data)
   if(json.users){
    n = json.users[0]
   } else {
    n = null
   }
   callback(n);
  });
});
};
