const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/f92bdfc18af307893656550fad8dd07b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to conect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
          callback(undefined, {
              temperature: body.currently.temperature,
              apparentTemperature: body.currently.apparentTemperature
          });
        } 
    });
};

module.exports.getWeather = getWeather;

