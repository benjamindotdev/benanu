import React from "react";
import ResultCard from "./ResultCard";

const ResultWrapper = () => {
  const transportModes = {
    car: { icon: "🚗", label: "Car" },
    train: { icon: "🚂", label: "Train" },
    plane: { icon: "✈️", label: "Plane" },
  };
  return (
    <div className="card glass">
      <ResultCard mode="car" cost={100} distance={100} co2Emissions={100} />
      <ResultCard mode="train" cost={200} distance={200} co2Emissions={200} />
      <ResultCard mode="plane" cost={300} distance={300} co2Emissions={300} />
    </div>
  );
};

export default ResultWrapper;
