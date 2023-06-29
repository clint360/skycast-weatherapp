import React, { useContext } from 'react';
import './Home.css';
import { AppContext } from '../../core/store/Context';
import WeatherWidget from '../../core/components/organisms/weather-widget/WeatherWidget';
import Three from '../../core/components/organisms/three/Three';
import SmallMapHolder from '../../core/components/organisms/maps/SmallMapHolder';

const Home: React.FC = () => {
    const { theme } = useContext(AppContext);
    const homeStyled = {
    }

  return (
    <div className='home'>
        <Three />
    </div>
  )
}

export default Home
