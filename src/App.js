import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  //id=fe4feefa8543e06d4f3c66d92c61b69c
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;

  const KEY = "fe4feefa8543e06d4f3c66d92c61b69c";
  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      alert("city name is not found");
    }
  };

  return (
    <div className="App">
      <div>
        {" "}
        <h1> weather App </h1>
        <div className="input">
          <input
            type="text"
            className="input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="city name in here..."
          ></input>
          <button onClick={fetchData}> check </button>
        </div>
        {data && (
          <div className="container">
            <h1> City: {data.name} </h1>
            <h3>
              {" "}
              - Temp: {Math.round(data.main.temp)} C, Humidity:{" "}
              {data.main.humidity}{" "}
            </h3>
            <h3> - Country: {data.sys.country} </h3>
            <h3>
              {" "}
              - Sunrise {data.sys.sunrise}, Sunset {data.sys.sunset}{" "}
            </h3>
            <h3>
              {" "}
              - Wind: {data.wind.speed}, Deg: {data.wind.deg}, Gust:{" "}
              {data.wind.gust}{" "}
            </h3>
            <h3> - Weather: {data.weather[0].description} </h3>
            <h3> - Lat: {data.coord.lat} </h3>
            <h3> - TimeZone: {data.timezone} </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
