import React, { useContext } from 'react';
import 'Home.css';
import { AppContext } from '../../core/store/Context';

const Home: React.FC = () => {
    const { theme } = useContext(AppContext);
    const homeStyled = {
    }

  return (
    <div className='home'>
      
    </div>
  )
}

export default Home
