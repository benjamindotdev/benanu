/* eslint-disable react/prop-types */

export default function UserInputForm({ destination, setDestination }) {
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setDestination({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  return (
    <input
      type="text"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      placeholder="Enter your destination"
      onClick={handleClick}
      className="input mt-1 block w-full max-w-md rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  );
}
