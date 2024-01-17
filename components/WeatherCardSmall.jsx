"use client";

import React, { useState } from 'react';
import { Info } from 'lucide-react';

const WeatherCardSmall = ({ icon, temp, description, temp_min, temp_max, wind_speed, timezone }) => {

  const [showDetails, setShowDetails] = useState(false);

  
  const getFormattedDate = (timestamp) => {
    console.log("Timestamp from API:", timestamp); // Log the timestamp to the console
  
    const date = new Date(timestamp * 1000); // Convert the timestamp to milliseconds
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  
   const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
    return (
      <div>
      
        <div className="card w-1/2 columns-4 bg-blue-100 shadow-xl mt-3">
          <div className="mt-3 col-span-1 gap-0">
          <div className="flex">

    <div className="mx-auto my-auto"><h2 className="card-date">{getFormattedDate(timezone)} </h2></div>
    <div className="mx-auto my-auto">{icon && (
              <img
                src={`https://openweathermap.org/img/w/${icon}.png`}
                alt="Weather Icon"
                className="w-16 h-16 mx-auto"
              />
              
            )}</div>
    <div className="mx-auto my-auto"><p className="text-bold"> {temp}°C</p></div>
    <div className="mx-auto my-auto"><button
              className={`btn ${showDetails ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}
              onClick={handleToggleDetails}
            >
              {showDetails ? 'Hide Details' : <Info />}
            </button></div>

    </div>
            
            
            
  
            {/* Additional details, conditionally rendered based on showDetails state */}
            {showDetails && (
              <div>
                <p className="p-4">Weather: {description}</p>
                <p className="p-4">Maximum Temperature: {temp_max}°C</p>
                <p className="p-4">Minimum Temperature: {temp_min}°C</p>
                <p className="p-4">Wind Speed: {wind_speed}</p>
              </div>
            )}
  
            
  
            {/* Show/Hide more information button always at the bottom */}
            
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCardSmall;