const categories = require("./categories");
const https = require('https');
module.exports = function(category, page, callback){
let n = '';
if(categories[category]){
  https.get('https://api.novovu.com/web/forum/thread.php?cat='+categories[category]+'&page='+page, (res) => {
    let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   let json = JSON.parse(data)
   if(json.threads){
    callback(json.threads[0]);
 }else{ callback(null);}})});
}else{callback(null)}};