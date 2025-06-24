import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    cityInput: "",
    condition: "",
    temprature: "",
    feelsLike: "",
    humidity: "",
    updated: "",
    country: "",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result);
  };

  let [error, setError] = useState("");
  let API_URL = import.meta.env.VITE_API_Link;
  let API_Key = import.meta.env.VITE_API_KEY;

  useEffect(()=>{
    async function getWeatherInfo() {
    try {
      setError("");
      let res = await fetch(`${API_URL}?key=${API_Key}&q=India`);
      let jsonResponse = await res.json();

      let result = {
        cityInput: jsonResponse.location.name,
        condition: jsonResponse.current.condition.text,
        temprature: jsonResponse.current.temp_c,
        feelsLike: jsonResponse.current.feelslike_c,
        humidity: jsonResponse.current.humidity,
        updated: jsonResponse.current.last_updated,
        country: jsonResponse.location.country,
      };
      console.log(result);
      updateInfo(result);
    } catch (err) {
      console.error("Error fetching weather info:", err.message);
      setError("City not found or API error. Please try again.");
    }
  }
  getWeatherInfo();
  }
    ,[])

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
