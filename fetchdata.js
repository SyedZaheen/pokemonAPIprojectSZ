// This is a js file in order to fetch all the pokemon names and their respective types from JSON API

const https = require('https');

https.get('https://pokeapi.co/api/v2/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.log(e);
});