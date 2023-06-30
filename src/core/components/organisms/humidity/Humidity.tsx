import React, { useContext } from 'react'
import Chart from 'react-google-charts';
import { AppContext } from '../../../store/Context';
import Barometer from '../../atoms/Barometer'

function Humidity() {
  const { weatherInfo } = useContext(AppContext);
  
  const data =[["Label", "Value"],
      ["Pressure", weatherInfo?.pressure],
    ];

    const options = {
    width: 500,
    height: 150,
    redFrom: 90,
    redTo: 200,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
  };

  return (
    <div className='prop-box'>
   <div style={{height: '200px'}}><Chart
      chartType="Gauge"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
    </div>
    <div className="wsdetails">
    <div>
        Humidity: <span style={{fontSize: '50px', fontWeight: 'bold', color: 'orange'}}>{weatherInfo?.humidity}</span> 
      </div>
    </div>
    </div>
  )
}

export default Humidity
