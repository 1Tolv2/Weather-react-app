import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  position: relative;
  top: 30px;
  left: 30px;
  width: 40px;
  height: 40px;
  background-color: #ffe770;
  border-radius: 50px;
  z-index: 5;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    width: 80px;
    height: 80px;
    background-color: #ffe770;
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
    background-color: #ffe770;
    border-radius: 100px;
    opacity: 0.1;
    z-index: 4;
  }
`;
export default function WeatherIcon() {
  return <IconContainer></IconContainer>;
}
