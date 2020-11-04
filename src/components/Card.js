import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";


const Card = ({humidity}) =>{
    return(     
    <div className="card">
        <hr/> 
        <h3>Humidity</h3>    
                <AnimatedProgressProvider
                valueStart={0}
                valueEnd={humidity}
                duration={2}
                easingFunction={easeQuadInOut}
                repeat
                text={`${humidity}%`}
              >
                {value => {
                  const roundedValue = Math.round(humidity);
                  return (
                    <CircularProgressbar
                      className="circle"
                      value={humidity}
                      text={`${roundedValue}%`}
              />
                  );
                }}
              </AnimatedProgressProvider>
    </div>
    );
}
export default Card;