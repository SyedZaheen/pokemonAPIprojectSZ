// This is a js file in order to fetch all the pokemon names and their respective types from JSON API
const https = require("https");

const fs = require("fs");

let fullNationalDex = "";

https
  .get("https://pokeapi.co/api/v2/pokedex/1/", (res) => {
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);
    let data = "";
    res.on("data", (d) => {
      data += d;
    });
    res.on("end", () => {
      let pokemonJSONObject = JSON.parse(data);
      fullNationalDex = JSON.stringify(pokemonJSONObject);
      fs.appendFile('fullPokedex.json', fullNationalDex , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    });
  })
  .on("error", (e) => {
    console.log(e);
  });
