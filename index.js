// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log('It worked! Returned IP:', ip);
});


fetchCoordsByIP('24.68.237.191', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!\n", error);
    return;
  }
  
  console.log('It worked! Returned IP:', coordinates);
});

fetchISSFlyOverTimes({ latitude: 48.4693489074707, longitude: -123.34159851074219 }, (error, flyTimes) => {
  if (error) {
    console.log("It didn't work!\n", error);
    return;
  }
  
  console.log('It worked! Returned times:', flyTimes);
*/
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});