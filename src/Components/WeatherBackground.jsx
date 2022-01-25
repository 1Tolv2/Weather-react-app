import React, { useContext } from "react";
import { weatherContext } from "../App";


const weatherBackground = {
    day: { good: "#adcbff, #5c87ff", bad: "#cdd6e5, #7d93cf" },
    night: { good: "#002f80, #00144d", bad: "#212d40, #16203c" },
  };

  function dayOrNight(sunrise, sunset, currentTime) {
    console.log(currentTime)
    return currentTime >= sunrise && currentTime <= sunset
      ? "day"
      : currentTime < sunrise
      ? "night"
      : currentTime > sunset
      ? "night"
      : "day";
  }

  function goodOrBadWeather(weatherCode) {
    const goodWeatherCodes = [500, 501, 600, 601, 701, 800, 801, 802];
    return goodWeatherCodes.includes(weatherCode) ? "good" : "bad";
  }
  
export default function WeatherBackground(props) {
  const { weatherData } = useContext(weatherContext);
console.log(props)
    return (
        `${weatherBackground[
        dayOrNight(props.sunrise, props.sunset, props.dt)
      ][goodOrBadWeather(props.weather[0].id)]}`)
      
}
