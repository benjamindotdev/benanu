/* eslint-disable react/prop-types */
const profiles = {
  foot: { icon: "🚶", label: "foot" },
  bike: { icon: "🚲", label: "bike" },
  car: { icon: "🚗", label: "car" },
};

const Result = ({ distance, emissions, time, profile }) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.ceil(time % 60);

  return (
    <div className="flex flex-col w-full gap-2 card bg-primary border-2 border-accent p-6 text-light">
      <>
        <h2 className="text-2xl text-accent">
          {profiles[profile].icon} {profiles[profile].label}
        </h2>
        <ul>
          <li>
            <strong className="text-accent">Time:</strong> {hours} hours{" "}
            {minutes} minutes
          </li>
          <li>
            <strong className="text-accent">Distance:</strong> {distance} km
          </li>
          <li>
            <strong className="text-accent">CO2 Emissions:</strong>{" "}
            {emissions.toFixed(2)} g
          </li>
        </ul>
      </>
    </div>
  );
};

export default Result;
