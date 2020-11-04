import React from 'react';
import rightArrow from '../assets/rightArrow.svg';


const WindCard = ({windSpeed, windDeg}) =>{

    return(
        <div className="windCard">
            <h3>Wind: {(windSpeed * 3600/1000).toFixed(2)} km/h</h3>
            <h4>Wind direction: {windDeg}°</h4>
        </div>
    );
}
 
export default WindCard;