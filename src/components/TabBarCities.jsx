

const TabBarCities = ({ setQuery }) => {
	const cities = [
		{
			id: 1,
			name: 'Bogota'
		},
		{
			id: 2,
			name: 'Caracas'
		},
		{
			id: 3,
			name: 'Mexico City'
		},
		{
			id: 4,
			name: 'Buenos Aires'
		},
		{
			id: 5,
			name: 'Montevideo'
		},
	]

  return (
    <div className="flex items-center justify-around my-6">
    	{
    		cities.map((city) => (
    			<button 
	    			className="text-lg font-medium" 
	    			key={city.id}
	    			onClick={() => setQuery({ q: city.name })}
    			>
      			{city.name}
    			</button>
  			))
    	}
    </div>
  );
};

export default TabBarCities;
