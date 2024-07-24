/* eslint-disable react/prop-types */
import ResultCard from "./ResultCard";

const ResultContainer = ({ result }) => {
  return (
    <>
      {result && (
        <div className="flex flex-col gap-6 card justify-center items-center">
          <h1 className="text-3xl">{result.destination}</h1>
          <p>Distance = {(result.distance / 1000).toFixed(1)} km</p>
          <p>Time = {(result.time / 60000).toFixed(1)} min</p>
        </div>
      )}
      <div className="flex flex-row gap-6 card">
        <ResultCard mode="car" cost={50} distance={200} co2Emissions={30} />
        <ResultCard mode="train" cost={50} distance={200} co2Emissions={30} />
        <ResultCard mode="plane" cost={50} distance={200} co2Emissions={30} />
      </div>
    </>
  );
};

export default ResultContainer;
