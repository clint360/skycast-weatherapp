import React, { useContext } from 'react';
import './Three.css';
import TemperatureBox from '../temperatue/TemperatureBox';
import Humidity from '../humidity/Humidity';
import WindSpeed from '../windspeed/WindSpeed';
import { AppContext } from '../../../store/Context';


function Three() {
  const { theme } = useContext(AppContext);
  return (
    <div className="bgcontainer4">
    <div className='three' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
      {/* <Barometer />
      <Temp id={2} value={20} title={"Temp"} />
      <Dail id="dial1" value={40} title="Speed X" /> */}
     <div><TemperatureBox /> </div> 
     <div><Humidity /></div> 
      <div><WindSpeed /></div> 
    </div>
    </div>
  )
}

export default Three
