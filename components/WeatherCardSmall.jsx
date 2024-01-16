"use client";

import React, { useState } from 'react';

const WeatherCardSmall = ({ icon, location, temp, description, temp_min, temp_max, wind_speed, daily, weekDay }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-md rounded-xl mx-auto bg-blue-100 shadow-xl mt-3 p-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex items-center justify-between">
          <h2 className="card-date font-bold text-center">Date {weekDay}</h2>
          <p className="font-bold text-2xl">{temp}°C</p>
          {icon && (
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="Weather Icon"
              className="w-16 h-16"
            />
          )}
        </div>
        <div className="col-span-3 mt-2 text-center">
          <button
            className={`btn ${showDetails ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}
            onClick={handleToggleDetails}
          >
               {showDetails ? 'Hide Details' : 'More Info'}
          </button>
        </div>
        {showDetails && (
          <div className="mx-auto">
            <p className="p-2 font-bold mb-2 text-center">Weather Forecast:</p>
            <p className='text-center'>{description}</p>
            <div className="grid grid-cols-3 gap-40 mt-2">
              <p className="p-2 text-center">Max Temperature: {temp_max}°C</p>
              <p className="p-2 text-center">Min Temperature: {temp_min}°C</p>
              <p className="p-2 text-center">Wind Speed: {wind_speed}m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default WeatherCardSmall;

