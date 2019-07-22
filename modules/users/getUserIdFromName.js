const https = require('https');
const fs = require('fs');
const url = "https://api.novovu.com/web/user/search.php?name="
module.exports = function(name, callback){
let n;
https.get(url+name, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   let json = JSON.parse(data)
   if(json.users){
   	n = json.users[0].id
   } else {
   	n = null
   }
   callback(n);
  });
});
};
