import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    cityInput: "Delhi",
    condition: "Partialy Cloudy",
    temprature: 37.6,
    feelsLike: 42.9,
    humidity: 39,
    updated: "2025-06-23 18:15",
    country: "India",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <br />
      <br />
      <InfoBox info={weatherInfo}/>
    </>
  );
}

export default WeatherApp;
