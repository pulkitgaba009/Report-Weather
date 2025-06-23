import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

function SearchBox() {
  let [city, setCity] = useState("Delhi");

  function handleInput(event) {
    let value = event.target.value;
    setCity(value);
  }

  function handleForm(event){
    event.preventDefault();
    console.log(city)
  }

  function empty(){
    setCity("")
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
      </div>
    </>
  );
}

export default SearchBox;
