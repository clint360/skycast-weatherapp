import React, { useContext } from 'react';
import './Home.css';
import { AppContext } from '../../core/store/Context';
import WeatherWidget from '../../core/components/organisms/weather-widget/WeatherWidget';
import Three from '../../core/components/organisms/three/Three';
import SmallMapHolder from '../../core/components/organisms/maps/SmallMapHolder';
import Forecast from '../../core/components/organisms/forecast/Forecast';

const Home: React.FC = () => {
    const { theme } = useContext(AppContext);

  return (
    <div className="home flex">
      <div>
        <WeatherWidget />
        <Forecast />
      </div>
      <div>
        <Three />
        <SmallMapHolder />
      </div>
    </div>
  )
}

export default Home
