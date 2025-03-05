import React, { useState } from "react";
import './Weather.css';
import humidity from'./humidity.png';
import temp from './temprature.png';
import wind from './icons/wind.png';
import cloud from './icons/cloudy.png';
import axios from "axios";


const Weather = () => {
  const [city, setCity] = useState("");
  const [weathe, setWeathe] = useState(null);
  const mycity="Chennai";

  const API_KEY = "95c9d6d986cc62be2f390e8f2f8284da"; 
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response);
      setWeathe(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeathe(null);
    }
  };

  return (
    <div className="wether">
      <h2>Weather App</h2>
      <input 
        type="text" 
        placeholder="Enter city name" 
        value={city} 
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weathe && (
        <div className="container-holder"> 
          <div className="container">
          <h3>CITY: {weathe.name}</h3>
          <h3>COUNTRY: {weathe.sys.country}</h3>
          <h3>{weathe.sys.sunrise}</h3>
        </div>
        <div className="container">
          <div className="container-items">
          <img src={temp} alt="Temp" /><br />
          <img src={humidity} alt="humidity" />
          </div>
          <div> 
          <p>Temperature: {weathe.main.temp}°C</p>
          <p>HUMIDITY :{weathe.main.humidity}</p>
          </div>
        </div>
        <div className="container">
          <div className="container-items"><img src={cloud} alt="cloud" />
          <img src={wind} alt="WIND" />
          </div>
          <div><p>Weather: {weathe.weather[0].description}</p>
          <p>Wind:{weathe.wind.speed}</p></div>
        </div>

        </div>
      )}
    </div>
  );
};

export default Weather;
