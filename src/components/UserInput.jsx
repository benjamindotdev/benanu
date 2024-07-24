/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTripContext } from "../context/TripProvider";
import PageSubHeader from "./PageSubHeader";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserInputForm() {
  //const { postData } = useTripContext();
  const [destination, setDestination] = useState("");
  const [responses, setResponses] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(destination);
    //postData({ destination });
    axios
      .get(
        `https://graphhopper.com/api/1/geocode?q=${destination}&locale=en&key=${
          import.meta.env.VITE_GRAPHHOPPER_API_KEY
        }`
      )
      .then((response) => {
        console.log(response.data);
        setResponses(response.data.hits);
      })
      .catch((error) => {
        console.log(error.response, import.meta.env.VITE_GRAPHHOPPER_API_KEY);
      })
      .finally(() => {
        console.log(responses);
      });
  };

  return (
    <div className="flex flex-col gap-2 p-6 rounded-xl card bg-white w-full">
      <PageSubHeader>Enter your destination</PageSubHeader>
      <div className="flex flex-row gap-2 items-center">
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
        {responses.map((response) => (
          <Link
            to={`/result?lat=${response.point.lat}&lng=${response.point.lng}&destination=${response.name}`}
            key={response.osm_id}
            className="flex flex-row gap-2 p-2 bg-primary text-dark font-bold rounded-xl "
          >
            <p>
              {response.name} ({response.osm_value}), {response.country}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
