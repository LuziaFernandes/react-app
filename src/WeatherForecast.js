import axios from "axios";
import React,  { useState } from "react"; 
import './WeatherForecast.css';

export default function WeatherForecast (props){
    let [loaded, setLoaded ] = useState(false);
    let [forecast, setForecast ] = useState(null);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded (true);
    }

       if (loaded) {   return (

        <div className="WeatherForecast">
        
        <div className ="row">
        
        <div className= "col-2"> 
        <div className="day"> {forecast[0].dt} </div>
        <div className="emoji"><img src="http://www.openweathermap.org/img/wn/10d@2x.png" alt="lala" /> </div>
        <div className="temperatures-of-day"><span className="temperature-day-max"> {forecast[0].temp.max}º </span><span className="temperature-day-min"> {forecast[0].temp.min}º </span></div>
        </div>
        
        </div>
        </div> );
} else { 
let longitude = props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=bca44421f5ddd1ef8a0ab2b038d5824&units=metric`;
axios.get(apiUrl).then(handleResponse);

return null; 
    
  }
   
 }