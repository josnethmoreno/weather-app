import { useState } from 'react'
import './App.css'

import TabBarCities from '/src/components/TabBarCities.jsx'
import Inputs from '/src/components/Inputs.jsx'
import TimeAndLocation from '/src/components/TimeAndLocation.jsx'
import TemperatureAndDetails from '/src/components/TemperatureAndDetails.jsx'
import Forecast from '/src/components/Forecast.jsx'

import getFormattedWeatherData from '/src/services/weatherService.js'

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'london' });
    console.log(data)
  }

  fetchWeather(); 

  return (
    <div className="App text-white">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TabBarCities />
        <Inputs />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title="Hourly forecast"/>
        <Forecast title="Daily forecast"/>
      </div>
    </div>
  )
}

export default App
