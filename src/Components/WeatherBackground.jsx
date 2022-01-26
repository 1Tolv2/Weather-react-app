import React from "react";

const weatherBackground = {
    sunrise: { good: "#6d9bc3, #EEC557, #FF8552", bad: "#6d9bc3, #EEC557, #FF8552" },
  day: { good: "#adcbff, #5c87ff", bad: "#cdd6e5, #7d93cf" },
  sunset: { good: "#754694, #EEC557, #FF8552", bad: "#754694, #EEC557, #FF8552" },
  night: { good: "#002f80, #00144d", bad: "#212d40, #16203c" },
};

function dayOrNight(sunrise, sunset, currentTime) {
  const hourOfSunrise = new Date(sunrise * 1000).getHours();
  const hourOfSunset = new Date(sunset * 1000).getHours();
  const hourOfDay = new Date(currentTime * 1000).getHours();
  if (hourOfDay === hourOfSunrise) {
    return "sunrise";
  } else if (hourOfDay > hourOfSunrise && hourOfDay < hourOfSunset) {
    return "day";
  } else if (hourOfDay === hourOfSunset) {
    return "sunset"
  } else if (hourOfDay > hourOfSunset || hourOfDay < hourOfSunrise) {
      return "night"
  }
}

function goodOrBadWeather(weatherCode) {
  const goodWeatherCodes = [500, 501, 600, 601, 701, 800, 801, 802];
  return goodWeatherCodes.includes(weatherCode) ? "good" : "bad";
}

export default function WeatherBackground(props) {
  return (`${
    weatherBackground[dayOrNight(props.sunrise, props.sunset, props.dt)][
    goodOrBadWeather(props.weather[0].id)]
  }`)
}

export { dayOrNight };
