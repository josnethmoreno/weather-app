import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
	  return (
    	<div>
    		<div className="text-center py-6 text-xl text-cyan-300">
    			<p>Cloudy or whatever</p>
    		</div>

    		<div className="flex flex-row items-center justify-between py-3">
    			<img 
	    			src="http://openweathermap.org/img/wn/01d@2x.png" 
	    			alt=""
	    			className="w-20"
	    		/>

	    		<p className="text-5xl font-medium">34°</p>

	    		<div className="flex flex-col items-start space-y-2">
	    			<div className="flex text-sm items-center justify-center text-xl">
						  <UilTemperature size={18} className="mr-1" />
	    				Rell fell:
	    				<span className="font-medium ml-1">32°</span>
	    			</div>
	    			<div className="flex flex-row space-y-2">
		    			<div className="flex text-sm items-center justify-center text-xl">
							  <UilTear size={18} className="mr-1" />
		    				Humidity:
		    				<span className="font-medium ml-1">32°</span>
		    			</div>
		    		</div>
		    		<div className="flex flex-row space-y-2">
		    			<div className="flex text-sm items-center justify-center text-xl">
							  <UilWind size={18} className="mr-1" />
		    				Wind speed:
		    				<span className="font-medium ml-1">32°</span>
		    			</div>
		    		</div>
	    		</div>
    		</div>

    		<div className="flex flex-row items-center justify-center space-x-2 text-sm py-3">
				  <UilSun />
				  <p>
					  Rise: <span className="font-medium ml-1">06:45 AM</span>
				  </p>
				  <p>|</p>
				  <UilSunset />
				  <p>
					  Set: <span className="font-medium ml-1">07:35 PM</span>
				  </p>
				  <p>|</p>
				  <UilSun />
				  <p>
					  High: <span className="font-medium ml-1">45°</span>
				  </p>
				  <p>|</p>
				  <UilSun />
				  <p>
					  Low: <span className="font-medium ml-1">40°</span>
				  </p>
				  <p>|</p>
    		</div>
    	</div>
    );
};

export default TemperatureAndDetails;
