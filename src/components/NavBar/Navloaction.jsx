"use client"; // Enable client-side rendering

import React, { useState, useEffect } from "react";

const LocationDropdown = () => {
  const [currentLocation, setCurrentLocation] = useState("Gurgaon");
  const [showDropdown, setShowDropdown] = useState(false);
  const [cities, setCities] = useState([]);

  // Fetch Top Cities from GeoDB Cities API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=IN&limit=10&sort=-population`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        if (data && data.data) {
          setCities(data.data.map((city) => city.city));
        } else {
          console.error("Unexpected API response structure:", data);
          setCities([]);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  // Detect User's Current Location
  const detectLocation = () => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY`
            );
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const components = data.results[0].components;
              const city =
                components.city || components.town || components.village || "Unknown City";
              const postcode = components.postcode || "Unknown PIN";
              setCurrentLocation(`${city} (${postcode})`);
            } else {
              setCurrentLocation("Location not found");
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            setCurrentLocation("Error fetching location");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Unable to detect location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="relative">
      {/* Location Display */}
      <div
        className="flex items-center space-x-2 bg-white px-3 py-2 rounded-md cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="text-gray-500 material-icons">location_on</span>
        <span className="text-gray-700 font-medium">{currentLocation}</span>
        <span className="text-gray-500 material-icons cursor-pointer">gps_fixed</span>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md w-64 z-10">
          <div className="px-4 py-2 text-gray-500 font-bold">TOP CITIES</div>
          <ul className="divide-y divide-gray-200">
            {cities.length > 0 ? (
              cities.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setCurrentLocation(city);
                    setShowDropdown(false);
                  }}
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No cities available</li>
            )}
          </ul>
          <button
            onClick={detectLocation}
            className="w-full text-center py-2 text-blue-600 font-bold hover:bg-gray-50"
          >
            Detect My Location
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
