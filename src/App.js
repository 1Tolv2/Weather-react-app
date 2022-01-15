import React, { useEffect, useState, createContext } from "react";
import StartPage from "./Pages/StartPage";
import APIFetch from "./Components/APIFetch";

const weatherContext = createContext("");

function App() {
  const [weatherData, setWeatherData] = useState(null);

  // function getData(position) {
  //   const coordinates = {
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude,
  //   };
  //   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=alert&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWeatherData(data);
  //     });
  // }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      APIFetch(position, setWeatherData)
    );
  }, []);

  return (
    <>
      <weatherContext.Provider value={{ weatherData }}>
        <StartPage></StartPage>
      </weatherContext.Provider>
    </>
  );
}

export default App;
export { weatherContext };
