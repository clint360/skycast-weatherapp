import React, { useContext } from 'react';
import { AppContext } from '../../../store/Context';
import ListItem from './components/ListItem';
import './Forecast.css'

function Forecast() {
   const { theme } = useContext(AppContext);

  return (
    <div className="bgcontainer3">
    <div className='forecast' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
      <div style={{paddingLeft: '20px', paddingTop: '10px', fontWeight: 'bold', position: 'fixed'}}>Hourly Forecasts</div> 
      <div style={{marginTop: '30px'}}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      </div>
    </div>
    </div>
  )
}

export default Forecast
