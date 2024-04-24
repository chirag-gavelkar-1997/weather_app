import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useEffect } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState(true);


  const fetchWeatherData = async (cityName) => {
    try {
      console.log(cityName,'data')

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4aa6ccebce1cf958fe14717946574d49&units=metric`);
      setWeatherData(response.data);
      setStatus(true);
      console.log(response,'data')
    } catch (error) {
      setStatus(false);
      console.error('Error fetching weather data:', error);
    }
  };
  useEffect(() => {
    fetchWeatherData('mumbai')
  }, [])
  

  return (
    <div className="App">
      <SearchBar onSearch={fetchWeatherData} data1={status} />
      {weatherData && <WeatherDisplay data={weatherData} data1={status} />}
    </div>
  );
}

export default App;
