const apiKey = "5dfac198ec15a5e397c95e155e31e2c1"; // Replace with your OpenWeatherMap API key
// Function to fetch weather data for a location
async function fetchWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


async function fetchAllWeatherData(locations) {
    const weatherData = [];
    for (const location of locations) {
      const data = await fetchWeatherData(location);
      weatherData.push(data);
    }
    return weatherData;
  }
  
  // Call the fetchAllWeatherData function and log the results
  export default fetchAllWeatherData;