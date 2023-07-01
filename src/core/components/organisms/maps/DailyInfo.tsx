import React from 'react';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import './DailyInfo.css';
import moment from "moment"
import { weatherCodeComponentMap, weatherLabelMap } from '../../atoms/IconMap';
import { IndexKind } from 'typescript';

type Props = { label: IndexKind, payload: any  }


function DailyInfo({ label, payload }: Props) {
    const Icon = weatherCodeComponentMap[label]
  return (
    <div className='dailyInfo'>
    <div className="date">{moment(payload.time).format("DD-MM-YYYY")}</div>
      <div className='icondiv'>
        <div className='condition'>
        {Icon && <Icon size={70} color="#ffffff" />}
        </div>
        <div className='degree'>{(payload.temperature_2m_min + payload.temperature_2m_min)/2}°C</div>
      </div>
      <div className="wcondition">
       {weatherLabelMap[label] ? weatherLabelMap[label] : 'No Info'} 
      </div>
      <div className="lists">
      <div className="wsdetails">
    <div>
        <span><FiSunrise /> Sunrise:</span><span>{moment(payload.sunrise).format("HH:mm")}</span>
      </div>
      <div>
        <span><FiSunset />  Sunset: </span><span>{moment(payload.sunset).format("HH:mm")}</span>
      </div>
    </div>
      </div>
    </div>
  )
}

export default DailyInfo
