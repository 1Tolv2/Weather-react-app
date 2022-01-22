import React, {useContext} from 'react';
import styled from 'styled-components';
import { weatherContext } from '../App';

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
        >
          <p className="tableDegree">
            {Math.round(weatherData.hourly[hourToCome].temp)}
          </p>
          <p>{weatherData.hourly[hourToCome].weather[0].main}</p>
          <img
            className="smallIcon"
            src={`/${weatherData.hourly[hourToCome].weather[0].icon}.svg`}
            alt={weatherData.hourly[hourToCome].weather[0].main}
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
  return <>{hourList}</>;
}
