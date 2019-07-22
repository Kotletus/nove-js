module.exports = function(callback){
https.get('https://api.novovu.com/web/shop/info.php?filter=all&search=all&page=1', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', function(){
   let json = JSON.parse(data).products
   	callback(json);
 });
});
};