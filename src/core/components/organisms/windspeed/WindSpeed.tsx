import React, { useContext } from 'react'
import Dial from '../../atoms/Dail'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { AppContext } from '../../../store/Context'

function WindSpeed() {
  const { weatherInfo } = useContext(AppContext);
  const dateFormat = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  }

  return (
    <div className='prop-box'>
    <Dial id="dial1" value={weatherInfo?.windSpeed} title={`Wind Speed: ${weatherInfo?.windSpeed} `} /> 
    <div className="wsdetails">
    <div>
        <span><FiSunrise /> Sunrise:</span><span>{dateFormat(weatherInfo?.sunrise)}</span>
      </div>
      <div>
        <span><FiSunset />  Sunset: </span><span>{dateFormat(weatherInfo?.sunset)}</span>
      </div>
    </div>
    </div>
  )
}

export default WindSpeed