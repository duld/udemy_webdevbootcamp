let request = require('request');
let axios = require('axios');


let yahoo_endpoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22clovis%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

request(`${yahoo_endpoint}`, (err, res, body) => {
  if (!err && res.statusCode === 200) {
    console.log('request call has finished!');
    const bodyData = JSON.parse(body);
    console.log(bodyData.query.results.channel.astronomy.sunset);
  }
});



// axios.get(`${yahoo_endpoint}`)
//   .then(res => {
//     console.log('axios .then call');
//     console.log(typeof res.data)
//     console.log(res.data.query.results.channel.astronomy.sunset);
//   })
//   .catch(err => {
//     console.log(err);
//   });



let movieAPI_generalSearch = `http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb`;
let movieAPI_movieIDSearch = `http://www.omdbapi.com/?i=tt3896198&apikey=thewdb`;