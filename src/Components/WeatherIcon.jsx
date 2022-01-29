import React, {useContext} from "react";
import styled, {css} from "styled-components";
import { dayOrNight } from "./WeatherBackground";
import { weatherContext } from "../App";

/*To-do:
1. Add classes for the sun, so during night it's a moon
2. Sun moving as time progresses*/
const IconContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${props => props.timeOfDay === "day" ? "#ffe770" : "#fff6c2"};
  border-radius: 50px;
  z-index: 5;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    opacity: 0.3;
    z-index: 4;
  }
  &::after {
    content: "";
    position: absolute;
    top: -35px;
    left: -35px;
    width: 110px;
    height: 110px;
    border-radius: 100px;
    opacity: 0.2;
    z-index: 4;
  }

  ${props => {
    if (props.timeOfDay === "sunrise") {
      return css`
      top: 220px;
      left: 220px;
      &::before{
        background-color: #fff6c2;
      }
      &::after{
        background-color: #fff6c2;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        top:-40px;
        left: -40px;
      }`}
    else if ( props.timeOfDay === "sunset") {
      return css`
      top: 220px;
      left: 40px;
      &::before{
        background-color: #fff6c2;
      }
      &::after{
        background-color: #fff6c2;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        top:-40px;
        left: -40px;`
    } else {
      return css`
      top: 50px;
      left: 50px;
      &::before{
        background-color: ${props => props.timeOfDay === "day" ? "#ffe770" : "#fff6c2"};
      }
      &::after{
        background-color: ${props => props.timeOfDay === "day" ? "#ffe770" : "#fff6c2"};`
    }
  }}
`;
export default function WeatherIcon(props) {
  const { weatherData } = useContext(weatherContext);

  return <IconContainer timeOfDay={dayOrNight(props.data.sunrise, props.data.sunset, props.data.dt)}></IconContainer>;
}
