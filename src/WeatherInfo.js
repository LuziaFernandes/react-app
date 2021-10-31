import React from "react"; 
import FormatDate from './FormatDate.js';
import './WeatherInfo.css';

export default function weatherInfo (props) { 
    return (
    <div className="WeatherInfo">
<div className="row">
<div className="col-6">
<h1>{props.data.cityName}</h1>
<div class="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt={props.data.description} /> </div>
<p> 
<strong><FormatDate date={props.data.date} /></strong>
<br/>
Description: <span className="values"> {props.data.description}  </span>
<br/>
Humidity: <span className="values"> {Math.round(props.data.humidity)} % </span> , Wind: <span className="values">{Math.round(props.data.wind)} Km/h</span> 
</p>
</div>

<div className="col-6 currentTemperature" >{Math.round(props.data.temperature)}</div>
</div>
</div>
);}