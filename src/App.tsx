import React, { useState, useEffect } from 'react';
import { Provider } from './core/store/Context';
import fetchAllWeatherData from './utils/Fetch';


const App: React.FC = () => {
  const [city, setCity] = useState<any>(['Yaounde']);
  const [theme, setTheme] = useState<string>('Dark');

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
      
       
    </Provider>
  );
};

export default App;