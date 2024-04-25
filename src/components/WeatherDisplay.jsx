import React from 'react';
import { WiHumidity } from "react-icons/wi";
import { TiWeatherPartlySunny, TiWeatherCloudy } from "react-icons/ti";

function WeatherDisplay({ data, data1 }) {
  const { main, wind } = data;

  return (
    <section className="text-gray-600 body-font">
      {data1 ? (
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center -m-4">
            <div className="p-4">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <TiWeatherPartlySunny />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Temperature</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{main.temp}°C</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <TiWeatherCloudy />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Humidity</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{main.humidity}%</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <WiHumidity />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Wind Speed</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{wind.speed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center font-bold text-2xl mt-10'>No City Found</p>
      )}
    </section>
  );
}

export default WeatherDisplay;