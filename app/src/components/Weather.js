import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.weather[0].main);

    setWeatherData({
      city: response.data.name,
      date: "25 May 2023",
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      imageUrl: "",
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1 className="city"> {weatherData.city}</h1>
            <ul>
              <li>
                Last updated:
                <span className="date">{weatherData.date}</span>
              </li>
              <li>
                <span className="description">{weatherData.description}</span>
              </li>
              <li>
                <ul>
                  <li>
                    Humidity:
                    <strong>
                      <span className="humidity">{weatherData.humidity}</span>%
                    </strong>
                  </li>
                  Wind:
                  <strong className="lowercase">
                    <span>{weatherData.windSpeed}</span>m/h
                  </strong>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-container d-flex justify-content-end">
              <img src={weatherData.imageUrl} alt={weatherData.description} />
              <span className="temperature"></span>
              <span className="unit">
                {Math.round(weatherData.temperature)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Kyiv";
    let unit = "metric";
    const apiKey = "be60748992fab0f5da8162563fb21245";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
