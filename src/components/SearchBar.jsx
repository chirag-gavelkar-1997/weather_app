import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

function SearchBar({ onSearch ,data1 }) {
  const [cityName, setCityName] = useState('mumbai');

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityName.trim()) {
      onSearch(cityName);
    }
  };

  return (
      <>
      <div className="flex  flex items-center  flex-col text-center w-full mt-20">
        <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900">Weather App</h1>
        {data1 && (
        <h3 className="sm:text-xl text-xl mt-5 font-medium title-font text-gray-900">{cityName},IN</h3>
        )}

        <div className="text-xs mt-5 border flex items-center justify-center  p-5 sm:w-94 w-96  bg-sky-100 tracking-widest font-medium title-font mb-1"> 
        <form onSubmit={handleSubmit}>
        <input  type="text" id="name"  onChange={handleChange}  placeholder="Enter city name" name="name" className=" bg-gray-100 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
     
      <button className="ml-2" type="submit"><IoSearch className="text-2xl flex item-center" /></button>
    </form>
    
    </div>
      </div>
      </>
   
  );
}

export default SearchBar;
