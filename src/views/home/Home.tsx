import React, { useContext } from 'react';
import './Home.css';
import { AppContext } from '../../core/store/Context';
import WeatherWidget from '../../core/components/organisms/weather-widget/WeatherWidget';

const Home: React.FC = () => {
    const { theme } = useContext(AppContext);
    const homeStyled = {
    }

  return (
    <div className='home'>
      <WeatherWidget />
    </div>
  )
}

export default Home
