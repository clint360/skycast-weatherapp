import React, { useState, useEffect } from 'react';
import { Provider } from './core/store/Context';
import './App.css';
import DesktopNav from './core/components/organisms/DesktopNav';
import Home from './views/home/Home';

const App: React.FC = () => {
  const [ searchQuery, setSearchQuery] = useState<string>('Kumba');
  const [theme, setTheme] = useState<string>('dark');
  const [ weatherInfo, setWeatherInfo ] = useState<any>({});
  const [ bodyDisplay, setBodyDisplay ] = useState<boolean>(true);
  const [dailyData, setDailyData] = useState<any>([]);
  const [hourlyData, setHourlyData] = useState<any>([]);
  const [ timezone, setTimezone ] = useState<any>([]);

  const appStyle = {
    background: "url('https://cdn.wallpapersafari.com/83/42/hU6Jsz.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    color: theme === 'dark' ? "white" : "black"
  }

 useEffect(()=> {
  async function fetchWeatherData(search: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5dfac198ec15a5e397c95e155e31e2c1&units=metric`;
    const response = await fetch(url);
    const data = await response.json().then((data: any) => {
      setWeatherInfo({
        lon: data.coord?.lon,
        lat: data.coord?.lat,
        weatherCondition: data.weather[0]?.main,
        weatherDescription: data.weather[0]?.description,
        icon: data.weather[0]?.icon,
        temperature: data.main?.temp,
        minTemp: data.main?.temp_min,
        maxTemp: data.main?.temp_max,
        pressure: data.main?.pressure,
        humidity: data.main?.humidity,
        windSpeed: data.wind?.speed,
        country: data.sys?.country,
        cityName: data.name,
        sunrise: data.sys?.sunrise,
        sunset: data.sys?.sunset
      });
    });
    return data;
  }
fetchWeatherData(searchQuery);
console.log(weatherInfo);
},[searchQuery]);

useEffect(()=>{
const setData = () => {
  const { lat, lon } = weatherInfo
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=${timezone}`
  )
    .then((res) => res.json())
    .then((data) => {
      // setData(data)
      // console.log(data)
      const { hourly, daily } = data
      let hourlyDataSet = []
      for(let i=0; i<hourly?.time.length; i++)
      {
          if(i<7)
          {
              setDailyData((dailyData: any) => {
                  return [
                      ...dailyData,
                      {
                          time: daily?.time[i],
                          temperature_2m_max: daily?.temperature_2m_max[i],
                          temperature_2m_min: daily?.temperature_2m_min[i],
                          weathercode: daily?.weathercode[i],
                          sunrise: daily?.sunrise[i],
                          sunset: daily?.sunset[i],
                      }
                  ]
              })
          }

          hourlyDataSet.push({
              time: hourly?.time[i],
              temperature_2m: hourly?.temperature_2m[i],
              rain: hourly?.rain[i],
              showers: hourly?.showers[i],
              snowfall: hourly?.snowfall[i],
              weathercode: hourly?.weathercode[i],
              windspeed_10m: hourly?.windspeed_10m[i],
          })
      }
     
      setHourlyData(hourlyDataSet)
     
    })
}
setData()
console.log(hourlyData, dailyData);
},[searchQuery])

  return (
    <Provider value={{
      theme, setTheme,
      searchQuery, setSearchQuery,
      setBodyDisplay,
      weatherInfo,
      hourlyData, setHourlyData,
      setTimezone,
      dailyData, setDailyData 
    }}>
      <section className="App" style={appStyle}>
       <div className="container" style={{backgroundColor: theme === 'dark'? '#10101010' : '#dcdcdc0533' }}>
        <DesktopNav />
        <div className='flex'>
          <div>
            {bodyDisplay && 
        <Home />
      }
        </div>
        </div>
        </div>
      </section>
    </Provider>
  );
};

export default App;