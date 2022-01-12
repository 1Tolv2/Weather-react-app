import React, { useContext } from "react";
import styled from "styled-components";
import { weatherContext } from "../App";
import CardThumbnail from "./Thumbnail"
import SunIcon from "./SunIcon";

const StyledCard = styled.div`
  height: 100%;
  width: 300px;
  margin: auto;
  z-index: 1;
  background-image: linear-gradient(#212d40, #16203c);
  box-shadow: 0px 0px 20px #121212;
  hr {
    margin: 0 20px;
    opacity: 0.5;
  }
`;

const StyledText = styled.h2`
  position: absolute;
  top: 5%;
  left: 50%;
  font-size: 4em;
  color: white;
  transform: translate(-50%, 0);
  text-shadow: 0px 0px 10px grey;
  &::after {
    position: absolute;
    content: "°";
  }
`;
const StyledIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default function CardFront() {
  const { weatherData } = useContext(weatherContext);
  console.log(weatherData.current.dt)
  const date = new Date(weatherData.current.dt*1000)
  console.log(date.getHours())
  return (
    <StyledCard>
      <CardThumbnail>
        <SunIcon></SunIcon>
        <StyledText>{Math.round(weatherData.current.temp)}</StyledText>
        <StyledIcon
          src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
        />
      </CardThumbnail>
      <hr />
    </StyledCard>
  );
}
