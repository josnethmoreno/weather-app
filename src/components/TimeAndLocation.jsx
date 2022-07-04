
import { formatToLocalTime } from '/src/services/weatherService'

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
  	<div className="">
  		<div className="flex items-center justify-center">
  			<p className="text-xl font-light">
    			{formatToLocalTime(dt, timezone)}
  			</p>
  		</div>
  		<div className="flex items-center justify-center my-3">
  			<p className="text-3xl font-bold">
  				{`${name}, ${country}`}
  			</p>
  		</div>
  	</div>
  );
};

export default TimeAndLocation;
