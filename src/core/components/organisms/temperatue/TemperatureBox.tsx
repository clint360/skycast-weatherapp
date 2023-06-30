import React, { useContext } from 'react'
import Temp from '../../atoms/Temp';
import './All.css';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6'
import { AppContext } from '../../../store/Context';

function TemperatureBox() {
  const { weatherInfo } = useContext(AppContext);
  return (
    <div className='prop-box'>
    <Temp id={2} value={weatherInfo?.temperature} title={"Temp"} />
      <div className="details">
      <div>
        <span><FaTemperatureArrowDown /> Min. Temp:</span><span>{weatherInfo?.minTemp}</span>
      </div>
      <div>
        <span><FaTemperatureArrowUp /> Max. Temp:</span><span>{weatherInfo?.maxTemp}</span>
      </div>
      </div>
    </div>
  )
}

export default TemperatureBox