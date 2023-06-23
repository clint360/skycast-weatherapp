import React, { useContext, useEffect, useState } from 'react';
import './WeatherWidget.css';
import axios from 'axios';
import { AppContext } from '../../../store/Context';

function WeatherWidget() {
//   return (
//     <div className="backgroundContainer">
//     <div className='weatherwidget'>
      
//     </div>
//     </div>
//   )
  const { searchQuery } = useContext(AppContext);
  const [weatherData, setWeatherData] = useState<any | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${'5dfac198ec15a5e397c95e155e31e2c1'}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      }
    fetchWeatherData();
  }, [searchQuery]);

  return (
    <div>
      <h1>SkyCast</h1>
      {weatherData && (
        <div className='itemsa'>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};


export default WeatherWidget
