import React, { useContext } from 'react';
import './ToggleMode.css';
import { FaMoon } from 'react-icons/fa';
import {BsFillSunFill} from 'react-icons/bs';
import IconCircle from '../atoms/IconCircle';
import { AppContext } from '../../store/Context';

function ToggleMode() {
  const { theme, setTheme } = useContext(AppContext);
  
  const onDarkModeToggle = () => {
    setTheme('dark');
 }

  const onLightModeToggle = () => {
     setTheme('light');
  }

  return (
    <div className='togglemode' style={{background: theme !== 'dark' ? 'white' : 'black' }} >
      <div style={{color: theme !== 'light' ? 'inherit' : 'grey'  }}>
      <IconCircle Icon={FaMoon} onClick={onDarkModeToggle}/>
      </div>
      <div style={{color: theme !== 'dark' ? 'inherit' : 'grey'  }}>
      <IconCircle Icon={BsFillSunFill} onClick={onLightModeToggle} />
      </div>
    </div>
  )
}

export default ToggleMode
