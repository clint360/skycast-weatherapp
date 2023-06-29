import React, { useContext, useEffect, useState } from 'react';
import './WeatherWidget.css';
import axios from 'axios';
import { AppContext } from '../../../store/Context';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6'
import clearImg from '../../../../assets/clear.png';
import cloudsImg from '../../../../assets/clouds.png';
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
  const { weatherInfo } = useContext(AppContext);
  const { theme } = useContext(AppContext);
  const date = new Date();


  const chooseImage = (condition: any) => {
    switch (condition) {
      case 'Rain':
        return rainImg
      case 'Snow':
        return snowImg
      // …
      case 'Mist':
        return mistImg

      case 'Clear':
        return clearImg

      case 'Clouds':
          return cloudsImg
      
      case 'Drizzle':
            return showerrainImg
            
      case 'Thunderstorm':
              return lighteningImg
      default:
        return cloudsImg
    }
  }

  return (
    <div className="bgcontainer2">
    <div className='weatherwidget' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
      <div className="topsec">
      <div className="imagesection">
      <img src={weatherInfo && chooseImage(weatherInfo.weatherCondition) } alt='rain' />
      </div>
      <div className="temperaturesection">
        <span className="number">
        {weatherInfo?.temperature}
        </span>
        <span className="degreecelcius">
        °C
        </span>
      </div>
      <div className="conditionsection">
        <span className="conditionicon">
        <img src={weatherInfo && `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt='none' />
        </span>
        <span className="condition">
        {weatherInfo?.weatherDescription}
        </span>
      </div>
      </div>
      <div className="bottomsec">
        <div className="line">
          <span className="iconon">
          <FaLocationDot />
          </span>
          <span className="texton">
          {weatherInfo?.cityName + ", " + weatherInfo?.country}
          </span>
        </div>
        <div className="line">
          <span className="iconon">
           <FaCalendarDays />
          </span>
          <span className="texton">
             {date.toDateString()}
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
