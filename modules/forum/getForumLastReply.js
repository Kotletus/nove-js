const https = require('https');
module.exports = function(id, page, callback){
let n = '';
https.get('https://api.novovu.com/web/forum/replies.php?tid='+id+'&page='+page, (res) => {
   let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   let json = JSON.parse(data)
   if(json.replies){
    callback(json.replies[0]);
  }else{ callback(null)
 }});
});
};