"use client";
// Import necessary libraries
import { useState, useEffect } from "react";
import { ApiClient } from "@/utils/ApiClient";
import WeatherCard from "@/components/WeatherCard";

import WeatherSearch from "@/components/WeatherSearch";
import WeatherCardSmall from "@/components/WeatherCardSmall";

// Your Home component
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
    daily: [], // MJ- addition Add a state for daily weather data
  });


  let d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let weekDay = days[d.getDay()];
  console.log(weekDay);

  // Function to fetch weather data
  const getThisWeekWeather = async () => {
    try {
      const response = await apiClient.getWeather(); // Ensure that your getWeather function fetches data from the correct endpoint

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
        daily: response.data.daily.slice(1, 6),
        weekDay: response.data.weekDay, // MJ-addition Save daily weather data for the next 7 days
      }));

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
    <main className="text-black bg-red-200 flex justify-between gap-8 p-4">
      {/* CURRENT WEATHER CARD */}      <div className="flex-1">
        <WeatherCard
        className ="sticky"
          location={weather.location}
          description={weather.description}
          temp={weather.temp}
          temp_min={weather.temp_min}
          temp_max={weather.temp_max}
          icon={weather.icon}
          wind_speed={weather.wind_speed}
          daily={weather.daily}
        />
      </div>

      {/* MJ ADDITION */}
      <div className="flex-shrink-0 bg-red-500">
        {weather.daily.map((day, index) => (
          <div key={index} className="mb-4">
            <WeatherCardSmall
              location={weather.location}
              weekDay={weekDay + index}
              description={day.summary}
              temp={day.temp.day}
              temp_min={day.temp.min}
              temp_max={day.temp.max}
              icon={day.weather[0].icon}
              wind_speed={day.wind_speed}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

