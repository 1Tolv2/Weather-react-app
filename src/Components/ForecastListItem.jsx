import React, { useContext } from "react";
import styled from "styled-components";
import { weatherContext } from "../App";

const StyledListItem = styled.li`
  display: flex;
  position: relative;
  color: grey;
  list-style: none;
  margin: 3px 0;
  &::before {
    content: "${(props) => props.id}";
    position: absolute;
    left: -25px;
    color: grey;
  }
  &.forecast,
  &.forecast::before {
    color: white;
  }
  p {
    margin: 0;
    margin-right: 3px;
  }
  p.tableDegree::after {
    position: relative;
    top: -3px;
    font-size: 0.7em;
    content: "°";
  }
  .smallIcon {
    height: 24px;
    width: 24px;
  }
`;

export default function ForecastListItem() {
  const { weatherData } = useContext(weatherContext);

  const currentDate = new Date(weatherData.current.dt * 1000);

// Places the coming 24 hours forecast data on the 24 slots.
// The greyed out is tomorrows data and becomes white when it's the current days data
  const hourList = [];
  for (let i = 0; i < 24; i++) {
    const hourlyData = new Date(weatherData.hourly[i].dt * 1000);
    console.log(hourlyData.getHours());
    if (hourlyData.getHours() >= currentDate.getHours()) {
      hourList[hourlyData.getHours()] = (
        <StyledListItem
          key={hourlyData.getHours()}
          id={hourlyData.getHours()}
          className="forecast"
        >
          <p className="tableDegree">
            {Math.round(weatherData.hourly[i].temp)}
          </p>
          <p>{weatherData.hourly[i].weather[0].main}</p>
          <img
            className="smallIcon"
            src={`/${weatherData.hourly[i].weather[0].icon}.svg`}
            alt={weatherData.hourly[i].weather[0].main}
          />
        </StyledListItem>
      );
    } else {
      hourList[hourlyData.getHours()] = (
        <StyledListItem key={hourlyData.getHours()} id={hourlyData.getHours()}>
          <p className="tableDegree">
            {Math.round(weatherData.hourly[i].temp)}
          </p>
          <p>{weatherData.hourly[i].weather[0].main}</p>
          <img
            className="smallIcon"
            src={`/${weatherData.hourly[i].weather[0].icon}.svg`}
            alt={weatherData.hourly[i].weather[0].main}
          />
        </StyledListItem>
      );
    }
  }
  return <>{hourList}</>;
}
