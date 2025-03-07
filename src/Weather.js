import React, { useState } from "react";
import './Weather.css';
import humidity from'./humidity.png';
import temp from './temprature.png';
import wind from './icons/wind.png';
import cloud from './icons/cloudy.png';
import arrow from './icons/down-chevron.png';
import axios from "axios";


const Weather = () => {
  const [weathe, setWeathe] = useState(null);
  const mycity="Chennai";

  const API_KEY = "95c9d6d986cc62be2f390e8f2f8284da"; 
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${API_KEY}&units=metric`;

    const result=async()=>{
    try {
      const response =await axios.get(API_URL);
      setWeathe(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeathe(null);
    }
  };
  return (
    <div className="wether" >
      <div className="reload">
         <img src={arrow} alt="reload" onClick={result} />
      </div>
      {weathe && (
        <div className="full-container">
          <div className="container">
             <h1>{weathe.name}</h1>
             <p id="count">{weathe.sys.country}</p>
             <img src={cloud} alt="clo" />
             <p className="weath">{weathe.weather[0].description}</p>
          </div>
          <div className="container-2">
            <div>
              <h1 className="temp">{weathe.main.temp} <br />%c</h1>
            </div>
            <div className="wind-info">
              <div><img src={wind} alt="wind" />
              <h1 className="windy">{weathe.wind.speed} w</h1>
              <h6>Wind</h6>
              </div>
              <div>
              <img src={humidity} alt="humidity" />
              <h1 className="humi">{weathe.main.humidity} H</h1>
              <h6>Humidity</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
