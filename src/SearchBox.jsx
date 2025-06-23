import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("India");
  let [error, setError] = useState("");

  let API_URL = "http://api.weatherapi.com/v1/current.json";
  const API_Key = "9b361a8af8d14b79aaf110958252306";

  async function getWeatherInfo() {
    try {
      setError("");
      let res = await fetch(`${API_URL}?key=${API_Key}&q=${city}`);
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

  function handleInput(event) {
    let value = event.target.value;
    setCity(value);
  }

  function handleForm(event) {
    event.preventDefault();
    console.log(city);
    getWeatherInfo();
  }

  function empty() {
    setCity("");
  }

  return (
    <>
      <div className="SearchBox">
        <h1>Search for the weather</h1>
        <form onSubmit={handleForm}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onClick={empty}
            onChange={handleInput}
            required
          />

          <br />
          <br />

          <Button variant="contained" size="large" type="submit">
            Get weather
          </Button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "1rem", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </div>
    </>
  );
}

export default SearchBox;
