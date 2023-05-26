import React from "react";

export default function ShowImage(props) {
  console.log(props.temp)
  if (props.temp > 20) {
    return (
      <img src="https://cdn-icons-png.flaticon.com/128/2934/2934972.png" />
    );
  } else if (props.temp >= 15 && props.temp < 20) {
    return (
      <img src="https://cdn-icons-png.flaticon.com/128/3531/3531744.png" />
    );
  } else if (props.temp >= 5 && props.temp < 15) {
    return (
      <img src="https://cdn-icons-png.flaticon.com/128/7223/7223203.png" />
    );
  } else if (props.temp >= 0 && props.temp < 5) {
    return (
      <img src="https://cdn-icons-png.flaticon.com/128/2390/2390058.png" />
    );
  } else {
    <img src="https://cdn-icons-png.flaticon.com/128/1926/1926322.png" />;
  }
}
