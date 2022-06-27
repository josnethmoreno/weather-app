import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = () => {
    return (
      <div className="flex flex-row justify-center my-6">
    		<div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input 
            type="text"
            placeholder="Search" 
            className="text-gray-700 text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize" 
          />
          <UilSearch 
            size={25} 
            className="cursor-pointer transition ease-out hover:scale-110" 
          />
          <UilLocationPoint 
            size={25} 
            className="cursor-pointer transition ease-out hover:scale-110" 
          />
        </div>

        <div className="flex flex-row items-center justify-center w-1/4">
          <button name="metric" className="text-xl font-light">
           °C 
          </button>
          <p className="text-xl mx-1 "></p>
          <button name="imperial" className="text-xl font-light">
           °F 
          </button>
        </div> 
      </div>
    );
};

export default Inputs;
