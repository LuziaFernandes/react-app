import React, { useState } from "react"; 
import './WeatherTemperature.css';

export default function WeatherTemperature (props) {
const [unit, setUnit] = useState ("celsius");

function showFahrenheit (event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
}
if (unit === "celsius") {
    return (
           <span className="WeatherTemperature">
    <div className="col-6 currentTemperature" >{Math.round(props.celsius)}<span className="unit"> ºC | <a href="/" onClick={showFahrenheit}>ºF</a></span> </div>
    </span>);
} else {
    let fahrenheit = (props.celsius * 1.8) + 32;
    return (    
    <span className="WeatherTemperature">
    <div className="col-6 currentTemperature" >{Math.round(fahrenheit)}<span className="unit"> <a href="/" onClick={showCelsius}> ºC</a> | ºF </span> </div>
    </span>);}

}