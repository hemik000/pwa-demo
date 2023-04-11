import React, { useState } from "react";

const Geo = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div onClick={getLocation} className="flex flex-col w-full items-center">
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Get Location
      </button>
      <div className="inline-block align-bottom cursor-pointer bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-4/5 sm:w-2/4 sm:my-8">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Geo Location
              </h3>
              <p className="text-3xl font-bold text-black">
                {lat && <p>Latitude: {lat}</p>}
                {lng && <p>Longitude: {lng}</p>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geo;
