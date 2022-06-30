const KEY = 'ff00bc586b3d276d451e87b07d3ccc4a'
const API = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (info, params) => {
	const url = new URL(API + info);
	url.search = new URLSearchParams({ ...params, appid: KEY })

	return fetch(url)
		.then(res => res.json())
		.then(data => data)
}

const formatCurrentWeather = (data) => {
	const {
		coord: {lat, lon},
		main: {temp, feels_like, temp_min, temp_max, humidity},
		name,
		dt,
		sys: {country, sunrise, sunset},
		weather,
		wind: {speed},
	} = data

	const {main: details, icon} = weather[0]

	return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, weather, speed }
}

const formatForecastWeather = (data) => {
	let { timezone, daily, hourly } = data;
	daily = daily.slice(1,6).map()
}

const getFormattedWeatherData = async (params) => {
	const formattedCurrentWeather = await getWeatherData('weather', params).then(formatCurrentWeather);

	const { lat, lon } = formattedCurrentWeather;

	const formattedForecastWeather = await getWeatherData('onecall', {
		lat,
		lon,
		exclude: 'currently,minutely,alerts',
		units: params.units,
	}).then(formatForecastWeather)
	
	return formattedCurrentWeather 	
}

const formatToLocalTime = (
	secs, 
	zone, 
	format = 'cccc, dd LLL yyyy | Local time: hh:mm a'
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


export default getFormattedWeatherData