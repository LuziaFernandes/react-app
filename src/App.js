
import './App.css';
import React, { useState } from "react"; 
import axios from 'axios';
import WeatherInfo from './WeatherInfo.js';
import WeatherForecast from './WeatherForecast';
export default App;

function App(props) {
  

const [weatherData, setWeatherData] = useState ({ ready: false});
const [city, setCity] = useState (props.cityDefault);



function handleResponse (response) {
  console.log(response.data);
  setWeatherData(
    {  ready: true, 
    temperature: response.data.main.temp, 
    wind: response.data.wind.speed, 
    cityName: response.data.name, 
    coordinates: response.data.coord,
    description: response.data.weather[0].main,
    humidity: response.data.main.humidity, 
    iconUrl: `https://www.openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    date: new Date(response.data.dt * 1000), 
        });
    }

    function search () {
      let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bca44421f5ddd1ef8a0ab2b038d5824c&units=metric`;
axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
      event.preventDefault();
      search();
    }

    function handleCityChange (event) {
      setCity(event.target.value);
      
    }

if (weatherData.ready) {
  return (
    <div className="App">
 <div className= "container">
 <img src="https://www.weather.shecodes.io/images/logo.png" alt="{weatherData.description}" width="150px" />

<div className= "weatherApp">

<form onSubmit={handleSubmit}>
<div className="row">
<div className="col-9"> <input type="search" placeholder="Search a city ... " className="form-control search-input" autoComplete="off" autoFocus="on" onChange={handleCityChange} /></div>
<div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
</div>
</form>

<WeatherInfo data={weatherData} />

<WeatherForecast coordinates={weatherData.coordinates} />

<footer>
<div>This project was coded by Luzia Fernandes at <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer"> SheCodes </a> and is <a href="https://github.com/LuziaFernandes/react-appp" target="_blank" rel="noreferrer"> open-sourced on GitHub</a> and hosted on 
<a href="https://pedantic-goodall-0599b2.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a></div>
</footer>
</div>
</div>
    </div>
  );
} else { 
  search();
  return "Loading..."; 
}
}