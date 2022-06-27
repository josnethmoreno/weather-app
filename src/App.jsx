import { useState } from 'react'
import './App.css'

import TabBarCities from '/src/components/TabBarCities.jsx'
import Inputs from '/src/components/Inputs.jsx'
import TimeAndLocation from '/src/components/TimeAndLocation.jsx'

function App() {
  return (
    <div className="App text-white">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TabBarCities />
        <Inputs />
        <TimeAndLocation />
      </div>
    </div>
  )
}

export default App
