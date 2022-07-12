import { useState, useEffect } from 'react'

import './App.css'

import TabBarCities from '/src/components/TabBarCities.jsx'
import Inputs from '/src/components/Inputs.jsx'
import TimeAndLocation from '/src/components/TimeAndLocation.jsx'
import TemperatureAndDetails from '/src/components/TemperatureAndDetails.jsx'
import Forecast from '/src/components/Forecast.jsx'

import getFormattedWeatherData from '/src/services/weatherService.js'

function App() {

  const [query, setQuery] = useState({q: 'San Cristobal'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 25 : 77
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'
    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`App flex text-white bg-gradient-to-br ${formatBackground()} min-h-screen`} >
      <div className='mx-auto max-w-screen-md md:py-10 pb-5 px-4 md:px-24 h-fit'>
        <TabBarCities setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units setUnits={setUnits} />

        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="Hourly forecast" items={weather.hourly}/>
            <Forecast title="Daily forecast" items={weather.daily}/>
          </>
        )}
      </div>
    </div>
  )
}

export default App
