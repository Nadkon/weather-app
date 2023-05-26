import React from "react";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  // let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=c6f8ef4575250284954db9f4dfa7a996`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-date">26 May 2023</div>
          <img src="" alt="icon" />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">+26</span>
            <span className="forecast-temperature-min">+22</span>
          </div>
        </div>
      </div>
    </div>
  );
}
