/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

export default function UserInputForm({ destination, setDestination }) {
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete = new places.Autocomplete(inputRef.current);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      setDestination(place.formatted_address);
    });
  }, [places, inputRef, setDestination]);

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <span className="text-gray-700">Destination: </span>
      <input
        ref={inputRef}
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="input mt-1 block w-full max-w-md rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
}
