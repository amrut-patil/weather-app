
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geocode(address, (error, data) => {
    if (error) {
        return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
    
        console.log("===============================================");
        console.log();
        console.log(data.place);
        console.log();
        console.log(forecastData);
        console.log();
        console.log("===============================================");
    });
});
