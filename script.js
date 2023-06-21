const unsplashAccessKey = 'IgvQD20Y17MQI_9uH94wW64xTLNNL3E2P5wlYZ76b40';
const weatherAPIKey = '9a98e395722125c9e231cc158de049ac';

async function fetchCityImage(cityName) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=${unsplashAccessKey}`);
    const data = await response.json();

    if (data.results.length > 0) {
        return data.results[0].urls.small;
    }
    return '';
}

async function fetchWeatherData(cityName) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPIKey}`);
    const data = await response.json();

    if (data.main) {
        return data.main;
    }
    return '';
}

async function fetchData() {
    const cityName = document.getElementById('city-input').value;
    const cityImage = await fetchCityImage(cityName);
    const weatherData = await fetchWeatherData(cityName);

    document.getElementById('city-image').src = cityImage;
    document.getElementById('weather-data').textContent = JSON.stringify(weatherData);
}