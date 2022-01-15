function getDataFromAPI(position, setData) {
  const coordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=alert&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
}

export default getDataFromAPI;
