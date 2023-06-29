// async function fetchWeatherData(search) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5dfac198ec15a5e397c95e155e31e2c1&units=metric`;
//   const response = await fetch(url);
//   const data = await response.json().then((data) => {
//     console.log({
//       lon: data.coord?.lon,
//       lat: data.coord?.lat,
//       weatherCondition: data.weather[0]?.main,
//       weatherDescription: data.weather[0]?.description,
//       icon: data.weather[0]?.icon,
//       temperature: data.main?.temp,
//       minTemp: data.main?.temp_min,
//       maxTemp: data.main?.temp_max,
//       pressure: data.main?.pressure,
//       humidity: data.main?.humidity,
//       windSpeed: data.wind?.speed,
//       country: data.sys?.country,
//       cityName: data.name,
//       sunrise: data.sys?.sunrise,
//       sunset: data.sys?.sunset
//     }
//     )
//   })
//   return data
// }

// export default fetchWeatherData;


// const fetch = require('node-fetch');

// Function to fetch weather data from the API
async function fetchWeatherData(search) {
  try {
    // Make a GET request to the weather API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5dfac198ec15a5e397c95e155e31e2c1&units=metric`);

    // Parse the response as JSON
    const data = await response.json();

    // Structure the data into a normal object
    const weatherData = {
      lon: data.coord?.lon,
      lat: data.coord?.lat,
      weatherCondition: data.weather[0]?.main,
      weatherDescription: data.weather[0]?.description,
      icon: data.weather[0]?.icon,
      temperature: data.main?.temp,
      minTemp: data.main?.temp_min,
      maxTemp: data.main?.temp_max,
      pressure: data.main?.pressure,
      humidity: data.main?.humidity,
      windSpeed: data.wind?.speed,
      country: data.sys?.country,
      cityName: data.name,
      sunrise: data.sys?.sunrise,
      sunset: data.sys?.sunset
    };

    // Export the weather data object
    module.exports = weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
