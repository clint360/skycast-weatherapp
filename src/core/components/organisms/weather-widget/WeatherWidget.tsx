import React, { useContext, useEffect, useState } from 'react';
import './WeatherWidget.css';
import axios from 'axios';
import { AppContext } from '../../../store/Context';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6'
import clearImg from '../../../../assets/clear.png';
import cloudsImg from '../../../../assets/cloud.png';
import showerrainImg from '../../../../assets/drizzle.png';
import mistImg from '../../../../assets/mist.png';
import rainImg from '../../../../assets/rain.png';
import snowImg from '../../../../assets/snow.png';
import lighteningImg from '../../../../assets/lightening.png';

function WeatherWidget() {
//   return (
//     <div className="backgroundContainer">
//     <div className='weatherwidget'>
      
//     </div>
//     </div>
//   )
  const { searchQuery } = useContext(AppContext);
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const { theme } = useContext(AppContext)

  useEffect(() => {
   {/*
        async function fetchWeatherData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${'5dfac198ec15a5e397c95e155e31e2c1'}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      }
    fetchWeatherData();
    */}
  }, [searchQuery]);

  return (
    <div className="bgcontainer2">
    <div className='weatherwidget' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
      <div className="topsec">
      <div className="imagesection">
      <img src={mistImg} alt='rain' />
      </div>
      <div className="temperaturesection">
        <span className="number">
         28
        </span>
        <span className="degreecelcius">
        °C
        </span>
      </div>
      <div className="conditionsection">
        <span className="conditionicon">
        <img src='' alt='none' />
        </span>
        <span className="condition">
        Rainy Storm Clouds
        </span>
      </div>
      </div>
      <div className="bottomsec">
        <div className="line">
          <span className="iconon">
          <FaLocationDot />
          </span>
          <span className="texton">
           Florida, US
          </span>
        </div>
        <div className="line">
          <span className="iconon">
           <FaCalendarDays />
          </span>
          <span className="texton">
             24 July, 2022 5:01 AM
          </span>
        </div>
      </div>
      {/*weatherData && (
        <div className='itemsa'>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      ) */}
      
    </div>
    </div>
  );
};


export default WeatherWidget
