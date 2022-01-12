import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FrontCard from "../Components/FrontCard";
import SideCard from "../Components/SideCard";

const Wrapper = styled.div`
  position: absolute;
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
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  perspective: 150px;
`;

export default function StartPage() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const location = { lat: 59.3293, lon: 18.0686 };
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=alert&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);
  console.log(weather);
  // console.log(weather.current.weather[0].main)
  return (<>
    <Wrapper>
      {weather && (
        <>
          <FrontCard data={weather}></FrontCard>
        </>
      )}
    </Wrapper>
    </>
  );
}
