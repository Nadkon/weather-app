import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { InfinitySpin } from "react-loader-spinner";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="weather-forecast">
        <h2>Weather forecast for 3 days</h2>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 3) {
              return (
                <div className="col forecast-container" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let unit = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    // let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=46fac47dd8b8fa26d1b6852218ad3dfe`;

    axios.get(apiUrl).then(handleResponse);
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}
