import React, { useContext } from "react";
import styled from "styled-components";
import { weatherContext } from "../App";
import CardThumbnail from "./Thumbnail";
import WeatherIcon from "./WeatherIcon";
import CardInformation from "./CardInformation";
import HourlyForecast from "./HourlyForecast";

const weatherBackground = {
  day: { good: "#adcbff, #5c87ff", bad: "#cdd6e5, #7d93cf" },
  night: { good: "#002f80, #00144d", bad: "#212d40, #16203c" },
};
function dayOrNight(sunrise, sunset, currentTime) {
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

const StyledCard = styled.div`
  height: 100%;
  width: 300px;
height: fit-content;
  margin: auto;
  z-index: 1;
  background-image: linear-gradient(${(props) =>
    props.data &&
    weatherBackground[
      dayOrNight(props.data.sunrise, props.data.sunset, props.data.dt)
    ][goodOrBadWeather(props.data.weather[0].id)]});
  box-shadow: 0px 0px 20px #121212;
  hr {
    margin: 0 20px;
    opacity: 0.5;
  }
`;

const StyledBigText = styled.h2`
  position: absolute;
  top: 5%;
  left: 50%;
  font-size: 4em;
  color: white;
  transform: translate(-50%, 0);
  text-shadow: 0px 0px 10px grey;
  &.degree::after {
    position: absolute;
    top: 5px;
    left: 32px;
    font-size: 0.6em;
    content: "°";
  }
`;

const StyledSmallText = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  font-size: 1.3em;
  font-weight: bold;
  color: white;
  transform: translate(-50%, 0);
  text-shadow: 0px 0px 10px grey;
`;

export default function CardFront() {
  const { weatherData } = useContext(weatherContext);

  const currentDate = new Date(weatherData.current.dt * 1000);
  console.log(currentDate);
  console.log(weatherData);

  return (
    <StyledCard data={weatherData.current}>
      <CardThumbnail>
        <WeatherIcon></WeatherIcon>
        <StyledBigText className="degree">
          {Math.round(weatherData.current.temp)}
        </StyledBigText>
        <StyledSmallText>{weatherData.current.weather[0].main}</StyledSmallText>
      </CardThumbnail>
      {/* <hr /> */}
      <CardInformation>
        <HourlyForecast></HourlyForecast>
      </CardInformation>
    </StyledCard>
  );
}
