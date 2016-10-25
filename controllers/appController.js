var NodeGeocoder = require('node-geocoder');
var axios = require('axios');

var options = {
  provider: 'google',
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: '', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);


function searchResult (req, res){
  console.log(req.body.search)
  geocoder.geocode(req.body.search, function(err, result){
    var longitude = result[0].longitude;
    var latitude = result[0].latitude;
    axios.get('https://developers.zomato.com/api/v2.1/geocode?lat='+latitude+'&lon='+longitude, {
      headers: {'user-key' : '13b9414eab7841a2b4b1d6d098a1f89d'},
    })
      .then(function (response) {
            console.log(response);
          })
      .catch(function (error) {
            console.log(error);
          });


  })

}
module.exports = {
  search: searchResult
}
