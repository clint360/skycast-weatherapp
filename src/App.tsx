import React, { useState, useEffect } from 'react';
import { Provider } from './core/store/Context';
import fetchAllWeatherData from './utils/Fetch';
import './App.css'
import DesktopNav from './core/components/organisms/DesktopNav';
import Home from './views/home/Home';
import Three from './core/components/organisms/three/Three';
import SmallMapHolder from './core/components/organisms/maps/SmallMapHolder';


const App: React.FC = () => {
  const [city, setCity] = useState<any>(['Yaounde']);
  const [ searchQuery, setSearchQuery] = useState<string>('Yaounde');
  const [theme, setTheme] = useState<string>('dark');

  const appStyle = {
    background: "url('https://cdn.wallpapersafari.com/83/42/hU6Jsz.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    color: theme === 'dark' ? "white" : "black"
  }

  // useEffect(()=> {
  //   fetchAllWeatherData(city).then((data) => {
  //     console.log(data[0]);
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // },[])


  return (
    <Provider value={{
      theme, setTheme,
      searchQuery, setSearchQuery
    }}>
      <section className="App" style={appStyle}>
       <div className="container" style={{backgroundColor: theme === 'dark'? '#10101010' : '#dcdcdc053' }}>
        <DesktopNav />
        <div className='flex'>
          <div>
        <Home />
        </div>
        </div>
        </div>
      </section>
    </Provider>
  );
};

export default App;