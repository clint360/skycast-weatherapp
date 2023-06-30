import React, { useContext } from 'react';
import { AppContext } from '../../../store/Context';
import ListItem from './components/ListItem';
import './Forecast.css';
import { weatherCodeComponentMap, weatherLabelMap } from './../../atoms/IconMap';



function Forecast() {
   const { theme, hourlyData } = useContext(AppContext);

  return (
    <div className="bgcontainer3">
    <div className='forecast' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
      <div style={{paddingLeft: '20px', paddingTop: '10px', fontWeight: 'bold', position: 'fixed'}}>Hourly Forecasts</div> 
      <div style={{marginTop: '30px'}}>
     {hourlyData.map((day: any)=> {return (
       <ListItem date={day.time} label={day.weathercode} temperature={day.temperature_2m} />
     )})} 
    </div>
    </div>
    </div>
  )
}

export default Forecast
