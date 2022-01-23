import React from "react";
import styled from "styled-components";

/*To-do:
1. Add classes for the sun, so during night it's a moon
2. Sun moving as time progresses*/
const IconContainer = styled.div`
  position: relative;
  top: 30px;
  left: 30px;
  width: 40px;
  height: 40px;
  background-color: ${props => props.timeOfDay === "day" ? "#ffe770" : "#fff3ad"};
  border-radius: 50px;
  z-index: 5;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    width: 80px;
    height: 80px;
    background-color: ${props => props.timeOfDay === "day" ? "#ffe770" : "#fff6c2"};
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
    background-color: ${props => props.timeOfDay === "day" ? "#ffe770" : "#fff6c2"};
    border-radius: 100px;
    opacity: 0.2;
    z-index: 4;
  }
`;
export default function WeatherIcon(props) {
  return <IconContainer {...props}></IconContainer>;
}
