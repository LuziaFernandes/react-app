
import './App.css';
import React, { useState } from "react"; 
import axios from 'axios';
import FormatDate from './FormatDate.js';
export default App;

function App() {
  
const [weatherData, setWeatherData] = useState ({ ready: false});

function handleResponse (response) {
  console.log(response.data);
  setWeatherData(
    {  ready: true, 
    temperature: response.data.main.temp, 
    wind: response.data.wind.speed, 
    cityName: response.data.name, 
    description: response.data.weather[0].main,
    humidity: response.data.main.humidity, 
    date: new Date(response.data.dt * 1000), 
    
    });
    
   
}


if (weatherData.ready) {
  return (
    <div className="App">
 <div className= "container">
 <img src="https://www.weather.shecodes.io/images/logo.png" alt="{weatherData.description}" width="150px" />
<div className= "weatherApp">
<form>
<div className="row">
<div class="col-9"> <input type="search" placeholder="Search a city ... " className="form-control search-input" autocomplete="off" autoFocus="on" /></div>
<div class="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
</div>
</form>

<div className="weatherInformation">
<div className="row">

<div className="col-6 info-current-location">
<h1>{weatherData.cityName}</h1>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={weatherData.description} /> </div>
<p> 
<strong><FormatDate date={weatherData.date} /></strong>
<br/>
Description: <span className="values"> {weatherData.description}  </span>
<br/>
Humidity: <span className="values"> {Math.round(weatherData.humidity)} % </span> , Wind: <span className="values">{Math.round(weatherData.wind)} Km/h</span> 
</p>
</div>

<div className="col-6 currentTemperature" >{Math.round(weatherData.temperature)}</div>
</div>
</div>


<div className="next-five-days">

<div className ="row">

<div className= "col-2"> 
<div className="day"> Mon </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={weatherData.description} /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>


<div className= "col-2"> 
<div className="day"> Tue </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={weatherData.description} /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

<div className= "col-2"> 
<div className="day"> Wed </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={weatherData.description} /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

<div className= "col-2"> 
<div className="day"> Thu </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={weatherData.description} /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

<div className= "col-2"> 
<div className="day"> Fri </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={weatherData.description} /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

</div>
</div>




<footer>
<div>This project was coded by Luzia Fernandes at <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer"> SheCodes </a> and is <a href="https://github.com/LuziaFernandes/react-appp" target="_blank" rel="noreferrer"> open-sourced on GitHub</a> and hosted on 
<a href="https://pedantic-goodall-0599b2.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a></div>
</footer>
</div>
</div>
    </div>
  );
} else { 
let city = "Porto";
let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bca44421f5ddd1ef8a0ab2b038d5824c&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading..."; 
}
}