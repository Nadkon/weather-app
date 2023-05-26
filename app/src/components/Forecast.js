import React from "react";
import Axios from "axios";

export default function Forecast() {
  function handleResponse(response) {
    // console.log(response.data);
  }

  let apiKey = "be60748992fab0f5da8162563fb21245";
  let latitude = 74;
  let longitude = 40.7;
  let apiUrl = `https:/api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  Axios.get(apiUrl).then(handleResponse);
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

        <div className="col-2">
          <div className="forecast-date">27 May 2023</div>
          <img src="" alt="icon" />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">+26</span>
            <span className="forecast-temperature-min">+22</span>
          </div>
        </div>

        <div className="col-2">
          <div className="forecast-date">28 May 2023</div>
          <img src="" alt="icon" />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">+26</span>
            <span className="forecast-temperature-min">+22</span>
          </div>
        </div>

        <div className="col-2">
          <div className="forecast-date">29 May 2023</div>
          <img src="" alt="icon" />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">+26</span>
            <span className="forecast-temperature-min">+22</span>
          </div>
        </div>

        <div className="col-2">
          <div className="forecast-date">30 May 2023</div>
          <img src="" alt="icon" />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">+26</span>
            <span className="forecast-temperature-min">+22</span>
          </div>
        </div>

        <div className="col-2">
          <div className="forecast-date">31 May 2023</div>
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
