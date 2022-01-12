import React from "react";
import styled from "styled-components";

const imageList = {
  Clouds: {
    icon: "",
    image:
      "https://images.unsplash.com/photo-1613725069329-b3103001f1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  Snow: {
    icon: "",
    image:
      "https://images.unsplash.com/photo-1488818138649-d2734488e6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
};

const StyledCard = styled.div`
  height: 100%;
  background-color: white;
  z-index: 1;
`;
const Thumbnail = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  .backgroundImage {
    height: 100%;
    opacity: 0.7;
    filter: blur(2.5px);
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
  &::after{
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

export default function FrontCard(props) {
  console.log(props.data);
  const weather = props.data.current.weather[0].main;
  console.log(imageList[weather].image);

  return (
    <StyledCard>
      <Thumbnail weather={weather}>
        <img className="backgroundImage" src={`${imageList[weather].image}`} />
        <StyledText>{Math.round(props.data.current.temp)}</StyledText>
        <StyledIcon
          src={`http://openweathermap.org/img/wn/${props.data.current.weather[0].icon}@2x.png`}
        />
      </Thumbnail>
    </StyledCard>
  );
}
