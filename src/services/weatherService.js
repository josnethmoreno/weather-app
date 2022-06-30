const KEY = 'ff00bc586b3d276d451e87b07d3ccc4a'
const API = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (info, params) => {
	const url = new URL(API + info);
	url.search = new URLSearchParams({ ...params, appid: KEY })

	return fetch(url)
		.then(res => res.json())
		.then(data => data)
}

const getFormattedWeatherData = (params) => {
	const formattedCurrentWeather = await getWeatherData('weather')
}

export { getWeatherData, getFormattedWeatherData};