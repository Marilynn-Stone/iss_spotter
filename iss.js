const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);
        
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }
    
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.ipbase.com/v2/info?apikey=s9gTaEhFlBkeg61kbOvS2BKddlyb9TX0pP9fV5yM&ip=${ip}`, (error, response, body) => {
    if (error) return callback(error, null);
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  
    const {latitude, longitude} = JSON.parse(body).data.location;
    console.log("Coords", {latitude, longitude});
  });
};
module.exports = { fetchMyIP, fetchCoordsByIP };