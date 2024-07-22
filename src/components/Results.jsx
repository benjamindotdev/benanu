import React from "react";

const transportModes = {
  car: { icon: "🚗", label: "Car" },
  train: { icon: "🚂", label: "Train" },
  plane: { icon: "✈️", label: "Plane" },
};

const TransportDetails = ({ cost, distance, co2Emissions }) => (
  <ul>
    <li>
      <strong>Cost:</strong> ${cost.toFixed(2)}
    </li>
    <li>
      <strong>Distance:</strong> {distance} km
    </li>
    <li>
      <strong>CO2 Emissions:</strong> {co2Emissions} kg
    </li>
  </ul>
);

const Result = ({ mode, ...rest }) => {
  const transport = transportModes[mode];

  return (
    <div className="result">
      <h2>
        {transport.label} {transport.icon}
      </h2>
      <TransportDetails {...rest} />
    </div>
  );
};

export default Result;
