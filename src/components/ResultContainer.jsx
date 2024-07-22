import ResultCard from "./ResultCard";

const ResultContainer = () => {
  return (
    <div className="flex flex-row gap-6 card">
      <ResultCard mode="car" cost={50} distance={200} co2Emissions={30} />
      <ResultCard mode="train" cost={50} distance={200} co2Emissions={30} />
      <ResultCard mode="plane" cost={50} distance={200} co2Emissions={30} />
    </div>
  );
};

export default ResultContainer;
