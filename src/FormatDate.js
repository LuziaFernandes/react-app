import React from "react"; 

export default function FormatDate (props) {
let days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[props.date.getDay()];
let hours = props.date.getHours();
let minutes = props.date.getMinutes();

if (minutes < 10) { minutes = `0${minutes}`;}

if (hours < 10) { hours = `0${hours}`;}

    return <span>  {day}, {hours}:{minutes}</span>
}
