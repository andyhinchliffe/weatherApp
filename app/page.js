"use client";
// Import necessary libraries
import { useState, useEffect } from "react";
import { ApiClient } from "@/utils/ApiClient";
import WeatherCard from "@/components/WeatherCard";
import WeatherSearch from "@/components/WeatherSearch";
import WeatherCardSmall from "@/components/WeatherCardSmall";
import '../app/globals.css'

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
    timezone: "",
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
        weekDay: response.data.weekDay,
        timezone: response.data.daily.dt, // MJ-addition Save daily weather data for the next 7 days
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
    <main>
       <h1 className=" p-4 bg-clip-text font-bold bg-cover bg-no-repeat text-8xl text-transparent text-center" style={{ backgroundImage: "url('https://64.media.tumblr.com/f9550bbdc547c3e9710faa8f344e06a6/tumblr_p3jcwibaUs1wnoat1o1_640.gif')" }}>
  The Weather App</h1>
    <div className="text-black flex justify-between gap-8 p-4">
      {/* CURRENT WEATHER CARD */}     
  <div className="flex-1">
      <div className="flex">
     

        {/* Col1 Left */}
        <div className=" ml-64 w-1/2 mt-12">
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
        {/* Col2 */}
        
       
          <div class="w-1/2 mt-20">
          <div className="flex-1">
          
          
          {weather.daily.map((day, index) => (
            <div key={index} className="">
<WeatherCardSmall
              location={weather.location}
              weekDay={weekDay + index}
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
   </div>
   </div>
          
          </div>

      {/* MJ ADDITION */}
      {/* Col 2 Right */}
      
        
      </div>
    </div>
    </main>
  );
}