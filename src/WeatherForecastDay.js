import React from "react"; 


export default function WeatherForecastDay (props) { 
function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
}
function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
}

function day(){
    let date = new Date (props.data.dt * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();

    return (days[day]);
}
    return (
        <div className="WeatherForecastDay">
    <div className="day"> {day()} </div>
<div className="emoji"><img src="https://www.openweathermap.org/img/wn/10d@2x.png" alt={props.data.weather[0].description} /> </div>

<div className="temperatures-of-day"><span className="temperature-day-max"> {maxTemperature()} </span><span className="temperature-day-min"> {minTemperature()} </span></div>

</div>

);}