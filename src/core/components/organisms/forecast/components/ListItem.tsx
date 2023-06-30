import React from 'react';
import './ListItem.css';
import { weatherCodeComponentMap, weatherLabelMap } from '../../../atoms/IconMap';
import { IndexKind } from 'typescript';

type Props = { date: string, label: IndexKind, temperature: any}

function ListItem({ date, label, temperature  }: Props) {
  function split(str: string, index: number) {
    const result = [str.slice(0, index), str.slice(index)];
    return result;
  }
  const time = split(date, 11)[1];
  const day = split(date, 10)[0]; 
  const Icon = weatherCodeComponentMap[label];
  return (
    <div className='forecastlist'>
      <div className="icon">{Icon &&
      <Icon size={48} color="#ffffff" />
    }
      </div>
      <div className="weathercondition">
       {weatherLabelMap[label]}
      </div>
      <div className="temp">
       {temperature}°C
      </div>
      <div className="time" style={{fontSize: '14px'}}>
      <div>{day}</div>
      <div style={{color:'green'}}>{time}</div>
      </div>
    </div>
  )
}

export default ListItem
