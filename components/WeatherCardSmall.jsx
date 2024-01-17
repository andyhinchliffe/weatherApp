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
  
   const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-md rounded-xl mx-auto bg-blue-100 shadow-xl mt-3 p-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex items-center justify-between">
          <h2 className="card-date font-bold text-center">{getFormattedDate(timezone)}</h2>
          <p className="font-bold text-2xl">{temp}°C</p>
 
          {icon && (
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="Weather Icon"
  {/* Show/Hide more information button always at the bottom */}

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

