import React, { useContext } from 'react';
import { AppContext } from '../../../store/Context';
import ListItem from './components/ListItem';
import './Forecast.css'

function Forecast() {
   const { theme } = useContext(AppContext);

  return (
    <div className="bgcontainer3">
    <div className='forecast' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
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
      <ListItem />
    </div>
    </div>
  )
}

export default Forecast
