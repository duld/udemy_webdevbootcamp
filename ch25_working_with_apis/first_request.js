let request = require('request');
let axios = require('axios');

request('http://google.com', (err, res, body) => {
  if (!err && res.statusCode === 200) {
    console.log('request call has finished!');
  }
});

axios.get('http://google.com')
  .then(res => {
    console.log('axios .then call');
    // console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  })