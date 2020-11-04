import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js'
import DateBuilder from './components/DateBuilder';
import WeatherBox from './components/WeatherBox';
import WindCard from './components/WindCard';
import WeatherCard from './components/WeatherType';
import WeatherType from './components/WeatherType';

const api = {
  key: "e592e57d4050e2bb86ce241c4ad42029",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&lang=en&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  // ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'

  const weatherDescType = (weatherMain) =>{
    console.log(weather.weather[0].main)
    if(weatherMain ==='fog'){
      console.log('true');
      return 'app.fog'
    }  
    else if(weatherMain ==='rain'){
      return 'app.rain'
    }  
    if(weatherMain ==='rain'){
      return 'app.rain'
    }  
    if(weatherMain ==='warm'){
      return 'app.warm'
    }  
    if(weatherMain ==='storm'){
      return 'app.storm'
    }  
    if(weatherMain ==='cloudy'){
      return 'app.cloudy'
    }  
    if(weatherMain ==='cold'){
      return 'app.fog'
    }  
    else{
      return 'app'
    }
  }


  return (
    <div className={weatherDescType()}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date"><DateBuilder /></div>
          </div>   
          <WeatherBox temp={weather.main.temp} min={weather.main.temp_min} max={weather.main.temp_max}/>        
          <div className="weather">{weather.weather[0].main}</div>
          {weatherDescType(weather.weather[0].main)}
          <Card humidity={weather.main.humidity} />
          <WindCard windSpeed={weather.wind.speed * 3600/1000} windDeg={weather.wind.deg} />
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;