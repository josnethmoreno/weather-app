import { useState, useEffect } from 'react'
import './App.css'

import TabBarCities from '/src/components/TabBarCities.jsx'
import Inputs from '/src/components/Inputs.jsx'
import TimeAndLocation from '/src/components/TimeAndLocation.jsx'
import TemperatureAndDetails from '/src/components/TemperatureAndDetails.jsx'
import Forecast from '/src/components/Forecast.jsx'

import getFormattedWeatherData from '/src/services/weatherService.js'

import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [query, setQuery] = useState({q: 'San Cristobal'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 25 : 60
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className="App text-white">
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
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

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  )
}

export default App
