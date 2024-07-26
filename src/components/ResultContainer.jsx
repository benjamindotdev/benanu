/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import emissions from "../data/emissions.json";

const ResultContainer = ({ results }) => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");

  return (
    <>
      {results && (
        <div className="flex flex-col w-full gap-6 card justify-start items-start">
          <h1 className="text-xl text-accent">
            Destination:{" "}
            <strong className="text-3xl font-sans text-secondary">
              {destination}
            </strong>
          </h1>
          {results.map((result, index) => {
            return (
              <ResultCard
                key={index}
                distance={result.distance}
                emissions={result.distance * emissions[0][result.profile]}
                time={result.time}
                profile={result.profile}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ResultContainer;
