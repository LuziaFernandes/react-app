
import './App.css';
import axios from "axios";

function App() {
  return (
    <div className="App">
      
 <div className= "container">
 <img src="https://www.weather.shecodes.io/images/logo.png" alt="logotipo" width="150px" />
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
<h1>Porto</h1>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="weather-emoji" /> </div>
<p> 
Description: clear sky
<br/>
Humidity: <span className="values"> </span> 19%, Wind: <span className="values"> </span> 10 Km/h
</p>
</div>

<div className="col-6 currentTemperature" >19 ºC</div>
</div>
</div>


<div className="next-five-days">

<div className ="row">

<div className= "col-2"> 
<div className="day"> Mon </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="weather-emoji" /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>


<div className= "col-2"> 
<div className="day"> Tue </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="weather-emoji" /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

<div className= "col-2"> 
<div className="day"> Wed </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="weather-emoji" /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

<div className= "col-2"> 
<div className="day"> Thu </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="weather-emoji" /> </div>
<div className="temperatures-of-day"><span className="temperature-day-max"> 32º </span><span className="temperature-day-min"> 22º </span></div>
</div>

<div className= "col-2"> 
<div className="day"> Fri </div>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="weather-emoji" /> </div>
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
}

export default App;
