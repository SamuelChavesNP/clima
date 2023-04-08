const apiKey = '9969401341112484312bc75081a23060';
const apiCountryUrl = 'https://countryflagsapi.com/png';
const cityInput = document.querySelector('#city-input');
const search = document.querySelector('#search');
const cityElement = document.querySelector('#city');
const temp = document.querySelector('#temperature span');
const description = document.querySelector('#description');
const icon = document.querySelector('#weather-icon');
const country = document.querySelector('#country');
const umidity = document.querySelector('#umidity span');
const wind = document.querySelector('#wind span');


// ---- Funções ---- //
const fetchWeather = async(city) => {
  const apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch (apiWeather);
  const data = await res.json();
  showWeatherData(data);
}
fetchWeather('Resende');

const showWeatherData = (data) => {
  console.log(data);
  cityElement.innerHTML = data.name;
  temp.innerHTML = Math.floor(data.main.temp);
  wind.innerHTML = `${Math.floor(data.wind.speed)}Km/h`;
  umidity.innerHTML = `${data.main.humidity}%`;
  description.innerHTML = data.weather[0].description;
  country.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

const handleClick = (event) => {
  event.preventDefault();
  const city = cityInput.value;
  fetchWeather(city);
}

// ---- Eventos ---- //
search.addEventListener('click', handleClick);
cityInput.addEventListener('keyup', (event) => {
  if(event.code === 'Enter') {
    const city = cityInput.value;
    fetchWeather(city);
    cityInput.value = '';
  }
})
