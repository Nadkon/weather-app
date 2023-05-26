import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"


export default function Forecast(props) {
let[loaded, setLoaded] = useState(false)
let[forecast, setForecast] = useState(null)


  function handleResponse(response) {
    console.log(response.data)
    setForecast(response.data.daily);
    setLoaded(true)
  }

  if (loaded) {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-2">
          <WeatherForecastDay data={ forecast[0]} />
        </div>
      </div>
    </div>
  );
  } else {
    let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    // let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=46fac47dd8b8fa26d1b6852218ad3dfe`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}
