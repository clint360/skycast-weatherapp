import React, { useContext } from 'react';
import DailyInfo from './DailyInfo';
import './SmallMapHolder.css';
import { AppContext } from '../../../store/Context';


function SmallMapHolder() {
  const { dailyData, theme } = useContext(AppContext);

  return (
    <div className='bgcontainer5'>
      <div className="smallmapholder" style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
        <b>Daily Forecasts</b>
        <div className='themain'>
        {dailyData && dailyData.map((day: any) => { return (<DailyInfo key={day.time} label={day.weathercode} payload={day} />) })
        }
        </div>
      </div>
    </div>
  )
}

export default SmallMapHolder
