import React, { useState, useEffect } from 'react';
import { Provider } from './core/store/Context';
import fetchAllWeatherData from './utils/Fetch';
import './App.css'
import DesktopNav from './core/components/organisms/DesktopNav';


const App: React.FC = () => {
  const [city, setCity] = useState<any>(['Yaounde']);
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
      theme, setTheme
    }}>
      <section className="App" style={appStyle}>
       <div className="container" style={{backgroundColor: theme === 'dark'? '#101010' : '#dcdcdc' }}>
        <DesktopNav />
       </div>
      </section>
    </Provider>
  );
};

export default App;