import React from 'react';
import './ListItem.css';
import randimg from '../../../../../assets/snow.png';

function ListItem() {
  return (
    <div className='forecastlist'>
      <div className="icon">
      <img src={randimg} alt="" />
      </div>
      <div className="weathercondition">
       Snow, Weather
      </div>
      <div className="temp">
       26°C
      </div>
      <div className="time">
       00:17AM
      </div>
    </div>
  )
}

export default ListItem
