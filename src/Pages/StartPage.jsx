import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FrontCard from "../Components/FrontCard";
import SideCard from "../Components/SideCard";

const Wrapper = styled.div`
  position: absolute;
//   background-color: blue;
  height: 70%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Slider = styled.div`
  width: 900px;
  margin: auto;
  height: 100%;
//   background-color: red;
  display: grid;
  grid-template-columns: 300px ;
  justify-content: center;

  perspective: 150px;

`;


export default function StartPage() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const location = { lat: 59.3293, lon: 18.0686 };
    const key = "2bec62a5de9cdb01d82f720ed93770aa";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=alert&appid=${key}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);
  console.log(weather);
  // console.log(weather.current.weather[0].main)
  return (
    <Wrapper>
      
      {weather && (
      <Slider>
    {/*<SideCard previous>{weather.current.weather[0].main}</SideCard>*/}
        <FrontCard data={weather}></FrontCard>
        {/* <SideCard>{weather.daily[1].weather[0].main}</SideCard> */}
        </Slider>)}
        
    </Wrapper>
  );
}
