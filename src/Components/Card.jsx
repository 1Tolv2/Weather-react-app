import React, { useContext } from "react";
import styled from "styled-components";
import { weatherContext } from "../App";
import CardThumbnail from "./Thumbnail";
import WeatherIcon from "./WeatherIcon";
import CardInformation from "./CardInformation";
import WeekDay from "./WeekDay";
import Text from "./Text";
import List from "./List";
import ForecastListItem from "./ForecastListItem";
import WeatherBackground from "./WeatherBackground";

const StyledCard = styled.div`
  height: 100%;
  width: 300px;
  height: fit-content;
  margin: auto;
  z-index: 1;
  box-shadow: 0px 0px 20px #121212;
  background-image: linear-gradient(${(props) => WeatherBackground(props.data)});
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 10%;
  margin: auto;
`;

export default function Card() {
  const { weatherData } = useContext(weatherContext);
  const hour = new Date(1643094840 * 1000);
  console.log(hour)
  console.log(hour.getHours());


  const currentDate = new Date(weatherData.current.dt * 1000);
  console.log(currentDate.getHours())
  return (
    <StyledCard data={weatherData.current}>
      <CardThumbnail>
        <WeatherIcon data={weatherData.current}/>
        <CenteredContainer>
          <Text Big className="degree">
            {Math.round(weatherData.current.temp)}
          </Text>
          <Text size="1.3em">{weatherData.current.weather[0].main}</Text>
          <Text size="0.9em">
            <WeekDay />
          </Text>
        </CenteredContainer>
      </CardThumbnail>
      <CardInformation>
        <List>
          <ForecastListItem />
        </List>
      </CardInformation>
    </StyledCard>
  );
}
