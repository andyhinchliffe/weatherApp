import React, { useState } from 'react';

const WeatherCardSmall = ({ icon, temp, description, temp_min, temp_max, wind_speed, timezone }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const getFormattedDate = (timestamp) => {
    console.log("Timestamp from API:", timestamp); // Log the timestamp to the console
  
    const date = new Date(timestamp * 1000); // Convert the timestamp to milliseconds
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <div className="card w-1/2 bg-blue-100 shadow-xl gap-2 mx-auto mt-10">
        <div className="card-body">
          <p>{getFormattedDate(timezone)}</p>
          <p className="p-4">Weather: {description}</p>

          <p className="p-4 text-bold"> {temp}°C</p>
          {icon && (
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="Weather Icon"
              className="w-24 h-24 mx-auto"
            />
          )}

          {/* Additional details, conditionally rendered based on showDetails state */}
          {showDetails && (
            <div>
              <p className="p-4">Maximum Temperature: {temp_max}°C</p>
              <p className="p-4">Minimum Temperature: {temp_min}°C</p>
              <p className="p-4">Wind Speed: {wind_speed}</p>
            </div>
          )}

          {/* Show/Hide more information button always at the bottom */}
          <button
            className={`btn ${showDetails ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}
            onClick={handleToggleDetails}
          >
            {showDetails ? 'Hide Details' : 'More Info'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCardSmall;