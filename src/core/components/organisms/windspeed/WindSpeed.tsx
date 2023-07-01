import React, { useContext } from 'react'
import Dial from '../../atoms/Dail'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { AppContext } from '../../../store/Context'
import moment from "moment"

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
        <span><FiSunrise /> Sunrise:</span><span>{moment(weatherInfo?.sunrise).format("HH:mm")}</span>
      </div>
      <div>
        <span><FiSunset />  Sunset: </span><span>{moment(weatherInfo?.sunset).format("HH:mm")}</span>
      </div>
    </div>
    </div>
  )
}

export default WindSpeed