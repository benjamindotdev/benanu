import React, { useState } from "react";

export default function UserInputForm() {
  //   const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Location: ${location}, Destination: ${destination}`);
    // Add code here to handle the form submission, e.g. make an API request
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* <label className="block">
          <span className="text-gray-700">Location:</span>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="block w-full pl-10 text-sm text-gray-700"
            placeholder="Enter your location"
          />
        </label> */}
        <label className="block">
          <span className="text-gray-700">Destination: </span>
          <input
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="block w-full pl-10 text-sm text-gray-700"
            placeholder="Enter your destination"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Go
        </button>
      </form>
    </div>
  );
}
