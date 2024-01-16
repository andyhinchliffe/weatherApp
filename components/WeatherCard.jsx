"use client";
import React from 'react';

const WeatherCard = ({ icon, location, temp, description, temp_min, temp_max, wind_speed, daily, weekDay }) => {
  return (
    <div className="card w-10/12 bg-blue-100 shadow-xl mx-auto mt-10 gap-y-20">
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title text-4xl text-center">{location}</h2>
        <h2 className="card-date font-bold text-center">Date {weekDay}</h2>
        <div className="flex items-center justify-center mb-4">
          {icon && (
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="Weather Icon"
              className="w-20 h-auto mr-2"
            />
          )}
          <p className="font-bold text-2xl text-center ">{temp}°C</p>
          
        </div>
        <div className="flex flex-col mb-10">
          <div className="grid grid-cols-2 gap-12 gap-x-36">
            <div>
              <p className=" text-center font-bold">Weather Forecast:</p>
              <p className="text-center text-2xl ">{description}</p>
            </div>
            <div>
              <p className="text-center font-bold">Wind Speed:</p>
              <p className="text-center text-2xl ">{wind_speed} m/s</p>
            </div>
            <div>
              <p className="text-center font-bold">Max Temperature:</p>
              <p className="text-center text-2xl text-xl">{temp_max}°C</p>
            </div>
            <div>
              <p className="text-center font-bold">Min Temperature:</p>
              <p className="text-center text-2xl">{temp_min}°C</p>

            </div>
          </div>
        </div>
        <div>
        <p className="text-center text-sm">Created by Aaron, Andy and Magdalena </p>
        <p className="text-center text-xs">Thanks to:  <a href="https://openweathermap.org/" className="mx-auto hover:text-blue-500 text-xs">https://openweathermap.org/</a></p>
       
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
