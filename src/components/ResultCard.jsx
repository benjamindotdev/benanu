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
    <div className="flex flex-col w-[400px] gap-2 card border-2 border-light p-6 text-light">
      <>
        <h2 className="text-2xl text-primary self-center">
          {profiles[profile].icon}{" "}
          {profiles[profile].label[0].toUpperCase() +
            profiles[profile].label.slice(1)}
        </h2>
        <ul>
          <li className="flex flex-row justify-between">
            <strong className="text-accent">🕛 Time:</strong> {hours} hours{" "}
            {minutes} minutes
          </li>
          <li className="flex flex-row justify-between">
            <strong className="text-accent"> 🛣️ Distance:</strong> {distance} km
          </li>
          <li className="flex flex-row justify-between">
            <strong className="text-accent">🌍 Emissions:</strong>{" "}
            {emissions.toFixed(2)} g
          </li>
        </ul>
      </>
    </div>
  );
};

export default Result;
