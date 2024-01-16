"use client";
import React from 'react'
const WeatherCard = ({icon,location,temp,description, temp_min, temp_max, wind_speed}) => {
  return (
    <div>
        <div className="card w-96 bg-blue-100 shadow-xl mx-auto mt-10">
  {/* <figure className="mx-auto w-64 shadow-xl"><img src={icon} alt="weatherImg" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">Location: {location}</h2>
    <p className ="p-4"> Weather: {description}</p>
    <p className ="p-4">Temperature: {temp}</p>
    <p className ="p-4">Maximum Temperature: {temp_max}</p>
    <p className ="p-4">Minimum Temperature: {temp_min}</p>
    <p className ="p-4">Wind Speed: {wind_speed}</p>

    {icon && (
  <img
    src={`https://openweathermap.org/img/w/${icon}.png`}
    alt="Weather Icon"
    className="w-24 h-24 mx-auto"
  />
)}
    <div className="card-actions justify-end">
      <button className="btn">More Info</button>
    </div>
  </div>
</div>
    </div>
  )
}
export default WeatherCard;