import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-6">
          <h1 className="city"> {props.data.city}</h1>
          <ul>
            <li>
              Last updated:
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <span className="description">{props.data.description}</span>
            </li>
            <li>
              <ul>
                <li>
                  Humidity:
                  <strong>
                    <span className="humidity">{props.data.humidity}</span>%
                  </strong>
                </li>
                Wind:
                <strong className="lowercase">
                  <span>{props.data.windSpeed}</span>m/h
                </strong>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span className="temperature"></span>
            <span className="unit">{Math.round(props.data.temperature)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
