import React from "react";

export default function Weather() {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-6">
          <h1 className="city"> Kyiv</h1>
          <ul>
            <li>
              Last updated:
              <span className="date">25 May 2023</span>
            </li>
            <li>
              <span className="description">Sunny</span>
            </li>
            <li>
              <ul>
                <li>
                  Humidity:
                  <strong>
                    <span className="humidity">20%</span>%
                  </strong>
                </li>
                Wind:
                <strong className="lowercase">
                  <span>1</span>m/h
                </strong>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <img src="" alt="" />
            <span className="temperature"></span>
            <span className="unit">+25°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
