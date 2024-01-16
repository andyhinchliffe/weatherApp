"use client";
import React from 'react'
const WeatherCard = ({icon,location,temp,description, temp_min, temp_max, wind_speed, daily, weekDay}) => {
  return (
    <div>
        <div className="card w-1/2 bg-blue-100 shadow-xl mx-auto mt-10">
  {/* <figure className="mx-auto w-64 shadow-xl"><img src={icon} alt="weatherImg" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">Location: {location}</h2>
    <h2 className="card-date">Date {weekDay}</h2>
    <p className ="p-4"> Weather: {description}</p>
    <p className ="p-4">Temperature: {temp}°C</p>
    <p className ="p-4">Maximum Temperature: {temp_max}°C</p>
    <p className ="p-4">Minimum Temperature: {temp_min}°C</p>
    <p className ="p-4">Wind Speed: {wind_speed}</p>

    {icon && (
  <img
    src={`https://openweathermap.org/img/w/${icon}.png`}
    alt="Weather Icon"
    className="w-24 h-24 mx-auto"
  />
)}






  
  </div>
</div>
    </div>

    
  )
}
export default WeatherCard;