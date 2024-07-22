import React from "react";

const transportModes = {
  car: { icon: "🚗", label: "Car" },
  train: { icon: "🚂", label: "Train" },
  plane: { icon: "✈️", label: "Plane" },
};

const TransportDetails = ({ cost, distance, co2Emissions }) => (
  <ul>
    <li>
      <strong className="text-accent">Cost:</strong> ${cost.toFixed(2)}
    </li>
    <li>
      <strong className="text-accent">Distance:</strong> {distance} km
    </li>
    <li>
      <strong className="text-accent">CO2 Emissions:</strong> {co2Emissions} kg
    </li>
  </ul>
);

const Result = ({ mode, ...rest }) => {
  const transport = transportModes[mode];

  return (
    <div className="flex flex-col gap-2 card bg-primary border-2 border-accent p-6 text-light">
      <h2 className="text-2xl text-accent">
        {transport.label} {transport.icon}
      </h2>
      <TransportDetails {...rest} />
    </div>
  );
};

export default Result;
