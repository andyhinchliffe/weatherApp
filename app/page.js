"use client";
// Import necessary libraries
import { useState, useEffect } from "react";
import { ApiClient } from "@/utils/ApiClient";
import WeatherCard from "@/components/WeatherCard";
import WeatherCardSmall from "@/components/WeatherCardSmall";

// Home component
export default function Home() {
  const apiClient = new ApiClient();

  // State to store weather data
  const [weather, setWeather] = useState({
    weekDay: "",
    location: "",
    description: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    wind_speed: "",
    icon: "",
    daily: [],
    timezone: "", // MJ- addition Add a state for daily weather data
  });

  // Function to fetch weather data
  const getThisWeekWeather = async () => {
    try {
      const response = await apiClient.getWeather();

      // Modification added to setWeather
      setWeather((prevWeather) => ({
        ...prevWeather,
        location: response.data.timezone,
        description: response.data.current.weather[0].description,
        temp: response.data.current.temp,
        temp_min: response.data.daily[0].temp.min,
        temp_max: response.data.daily[0].temp.max,
        wind_speed: response.data.current.wind_speed,
        icon: response.data.current.weather[0].icon,
        daily: response.data.daily.slice(0, 5),
        timezone: response.data.daily.dt,
      }));
      console.log(response)
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
      {/* CURRENT WEATHER CARD */}
      <WeatherCard
        location={weather.location}
        description={weather.description}
        temp={weather.temp}
        temp_min={weather.temp_min}
        temp_max={weather.temp_max}
        icon={weather.icon}
        wind_speed={weather.wind_speed}
      />

      {/* MJ ADDITION */}
      {weather.daily.map((day, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          
          {/* OTHER WEATHER CARDS */}
          <WeatherCardSmall
            description={day.summary}
            temp={day.temp.day}
            temp_min={day.temp.min}
            temp_max={day.temp.max}
            icon={day.weather[0].icon}
            wind_speed={day.wind_speed}
            timezone = {day.dt}
          />




        </div>
      ))}
    </main>
  );
}