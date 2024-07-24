/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTripContext } from "../context/TripProvider";
import axios from "axios";

export default function UserInputForm() {
  const { postData } = useTripContext();
  const [destination, setDestination] = useState("");
  const [responses, setResponses] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(destination);
    postData({ destination });
    axios
      .get(
        `https://graphhopper.com/api/1/geocode?q=${destination}&locale=en&key=${
          import.meta.env.VITE_GRAPHHOPPER_API_KEY
        }`
      )
      .then((response) => {
        console.log(response.data);
        setResponses([response.data]);
      })
      .catch((error) => {
        console.log(error.response, import.meta.env.VITE_GRAPHHOPPER_API_KEY);
      })
      .finally(() => {
        console.log("Request completed.");
      });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter your destination"
          className="input mt-1 block w-full max-w-md rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button className="btn" onClick={(e) => handleClick(e)}>
          Search
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {responses.map((response) => JSON.stringify(response))}
      </ul>
    </div>
  );
}
