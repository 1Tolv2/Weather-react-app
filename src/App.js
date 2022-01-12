import React, { useEffect, useState, createContext } from "react";
import StartPage from "./Pages/StartPage";
import styled from "styled-components";

const weatherContext = createContext("");

const StyledTitle = styled.h1`
  text-align: center;
  color: white;
  text-transform: lowercase;
`;
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [today, setToday] = useState(null);
  useEffect(() => {
    const location = { lat: 59.3293, lon: 18.0686 };
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=alert&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });

    const dayList = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const day = new Date();
    setToday(dayList[day.getDay() - 1]);
  }, []);
  console.log(weatherData);

  return (
    <>
      <weatherContext.Provider value={{ weatherData }}>
        <StyledTitle>{today}</StyledTitle>
        <StartPage></StartPage>
      </weatherContext.Provider>
    </>
  );
}

export default App;
export { weatherContext };
