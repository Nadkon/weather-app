import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.weather[0].main);

    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      iconUrl: "",
    });

  }

  if (weatherData.ready) {
    return (
      <div>
            <form className="mb-2">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a city name..."
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="col-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
        <WeatherInfo data={ weatherData} />
      </div>

    );
  } else {
    let unit = "metric";
    const apiKey = "be60748992fab0f5da8162563fb21245";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
