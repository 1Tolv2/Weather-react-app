import React, { useContext } from "react";
import { weatherContext } from "../App";
import styled from "styled-components";

const StyledList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(12, auto);
  grid-auto-flow: column;
  gap: 0 35px;
  padding-left: 45px;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    border-radius: 5px;
    background-color: white;
    opacity: 0.2;
    z-index: 0;
  }
`;
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

export default function HourlyForecast() {
  const { weatherData } = useContext(weatherContext);

  const currentDate = new Date(weatherData.current.dt * 1000);

  /* To-do
    1. Add old data of default greyish data for the hours past? */
  const hourList = [];
  let hourToCome = 0;
  for (let i = 0; i < 24; i++) {
    if (i >= currentDate.getHours()) {
      hourList.push(
        <StyledListItem
          key={i}
          id={i}
          className="forecast"
          alt={weatherData.hourly[hourToCome].weather[0].main}
        >
          <p className="tableDegree">
            {Math.round(weatherData.hourly[hourToCome].temp)}
          </p>
          <p>{weatherData.hourly[hourToCome].weather[0].main}</p>
          <img
            className="smallIcon"
            src={`/${weatherData.hourly[hourToCome].weather[0].icon}.svg`}
          />
        </StyledListItem>
      );
      hourToCome++;
    } else {
      hourList.push(
        <StyledListItem key={i} id={i}>
          <br />
        </StyledListItem>
      );
    }
  }
  return <StyledList>{hourList}</StyledList>;
}
