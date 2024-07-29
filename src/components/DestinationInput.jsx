/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PageSubHeader from "./PageSubHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { useTripContext } from "../context/TripProvider";

export default function UserInputForm() {
  const [destination, setDestination] = useState("");
  const [responses, setResponses] = useState([]);
  const { postTrip } = useTripContext();
  const { theme } = useThemeContext();

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = () => {
    postTrip();
  };

  useEffect(() => {
    if (destination.length > 2) {
      const timeoutId = setTimeout(() => {
        axios
          .get(
            `https://graphhopper.com/api/1/geocode?q=${destination}&locale=en&key=${
              import.meta.env.VITE_GRAPHHOPPER_API_KEY
            }`
          )
          .then((response) => {
            setResponses(response.data.hits);
          })
          .catch((error) => {
            console.log(
              error.response,
              import.meta.env.VITE_GRAPHHOPPER_API_KEY
            );
          });
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setResponses([]);
    }
  }, [destination]);

  return (
    <div
      className={`flex flex-col gap-2 p-6 rounded-xl card shadow-xl w-full ${
        theme === "light" ? "bg-light2" : "bg-dark2"
      }`}
    >
      <div className="flex justify-between">
        <PageSubHeader>Enter your destination</PageSubHeader>
        <a
          href="https://www.graphhopper.com"
          target="_blank"
          rel="noreferrer"
          className=" text-accent text-lg text-right"
        >
          Powered by Graphhopper
        </a>
      </div>
      <div className="flex flex-row gap-2 items-center ">
        <input
          type="text"
          value={destination}
          onChange={handleChange}
          placeholder="Enter your destination"
          className={`input w-full shadow-xl rounded-md border-secondary focus:border-accent focus:ring focus:ring-primary focus:ring-opacity-50 ${
            theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        />
      </div>
      <ul className="flex flex-col gap-2">
        {responses &&
          destination !== "" &&
          responses.map((response, index) => (
            <Link
              to={`/result?lat=${response.point.lat}&lng=${response.point.lng}&destination=${response.name}`}
              key={response.osm_id + index}
              onClick={handleSubmit}
              className={`flex flex-row gap-2 p-2 font-bold opacity-50 hover:bg-accent hover:opacity-100 hover:text-dark ${
                theme === "light" ? "bg-light2 " : "bg-dark2"
              }`}
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
