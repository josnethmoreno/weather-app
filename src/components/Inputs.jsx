import { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState('')

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name
    if(units !== selectedUnit) setUnits(selectedUnit)
  }

  const handleSearchClick = () => {
    if(!city.trim()) return console.error('Please enter a name city')
    setQuery({ q: city })
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
  		<div className="flex flex-row w-100 sm:w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search" 
          className="text-gray-700 text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize" 
        />
        <UilSearch 
          size={25} 
          className="cursor-pointer transition ease-out hover:scale-110"
          onClick={handleSearchClick}
        />
        <UilLocationPoint 
          size={25} 
          className="cursor-pointer transition ease-out hover:scale-110" 
          onClick={handleLocationClick}
        />
      </div>

      <div className="hidden sm:flex flex-row items-center justify-center w-1/4">
        <button 
          name="metric" 
          className="text-xl font-light transition ease-out hover:scale-110"
          onClick={handleUnitsChange}
        >
         °C 
        </button>
        <p className="text-xl mx-1 "></p>
        <button 
          name="imperial" 
          className="text-xl font-light transition ease-out hover:scale-110"
          onClick={handleUnitsChange}
        >
         °F 
        </button>
      </div> 
    </div>
  );
};

export default Inputs;
