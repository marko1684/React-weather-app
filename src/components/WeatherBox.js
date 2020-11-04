import React from 'react';

const WeatherBox = ({temp, min, max}) =>{

    return(
        <div className="weather-box">
        <div className="temp">
              {Math.round(temp)}°c
              <br/>
                <div className="min-max">
                 {Math.round(min)}/{Math.round(max)}°c
                </div>
              </div>
        </div>
    )
}

export default WeatherBox;