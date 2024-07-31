/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import ResultContainer from "../components/ResultContainer";
import { useSearchParams } from "react-router-dom";
import DestinationInput from "../components/DestinationInput";
import axios from "axios";

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const destination = searchParams.get("destination");

  useEffect(() => {
    if (lat && lng && destination) {
      axios
        .post("https://seeo2-backend-production.up.railway.app/result", {
          lat,
          lng,
          destination,
        })
        .then((response) => {
          console.log("Response Data:", response.data);
          setResults(response.data);
        })
        .catch((error) => {
          console.log("Error:", error.response);
        });
    }
  }, []);

  return (
    <PageContainer>
      <PageHeader>Result</PageHeader>
      {!lat || !lng ? (
        <DestinationInput />
      ) : (
        results && <ResultContainer results={results} />
      )}
    </PageContainer>
  );
};

export default ResultPage;
