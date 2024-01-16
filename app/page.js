"use client";
// Import necessary libraries
import { useState, useEffect } from "react";
import { ApiClient } from "@/utils/ApiClient";
import WeatherCard from "@/components/WeatherCard";

// Your Home component
export default function Home() {
  const apiClient = new ApiClient();

  // State to store weather data
  const [weather, setWeather] = useState({
    temp: "",
    temp_min: "",
    temp_max: "",
    location: "",
    description: "",
    wind_speed: "",
    icon: "", // Add icon state to store the image URL
  });

  // Function to fetch weather data
  const getThisWeekWeather = async () => {
    try {
      const response = await apiClient.getWeather(); // Ensure that your getWeather function fetches data from the correct endpoint
      setWeather({
        location: response.data.timezone,
        description: response.data.current.weather[0].description,
        temp: response.data.current.temp,
        temp_min: response.data.daily[0].temp.min,
        temp_max: response.data.daily[0].temp.max,
        wind_speed: response.data.current.wind_speed,
        icon: response.data.current.weather[0].icon, 
      });
      console.log(response);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // useEffect to fetch weather data on component mount
  useEffect(() => {
    getThisWeekWeather();
  }, []);

  // Display the weather information and image
  return (
    <main className="text-black">
      <WeatherCard
        location={weather.location}
        description={weather.description}
        temp={weather.temp}
        temp_min = {weather.temp_min}
        temp_max = {weather.temp_max}
        icon = {weather.icon}
        wind_speed = {weather.wind_speed}
        // Add other props as needed
      />
       {/* <p>Min Temperature: {weather.temp_min}</p>
      <p>Max Temperature: {weather.temp_max}</p>
      <p>Wind Speed: {weather.wind_speed} m/s</p>
      {weather.icon && (
        <img
          src={`https://openweathermap.org/img/w/${weather.icon}.png`}
          alt="Weather Icon"
        />
      )} */}
      
    </main>
  );
}

