import React from "react";
import ShowImage from "./ShowImage";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°C`;
  }

  function minTemperature() {
    minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];

    return days[day];
  }
  return (
    <div>
      <div className="forecast-date">{day()}</div>
      <ShowImage temp={props.data.temp.day} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-min">{minTemperature()}</span>
         <span>...</span>
        <span className="forecast-temperature-max">{maxTemperature()}</span>
      </div>
    </div>
  );
}
