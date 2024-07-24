/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import ResultContainer from "../components/ResultContainer";
import { useSearchParams } from "react-router-dom";
import UserInput from "../components/UserInput";
import axios from "axios";
import { useTripContext } from "../context/TripProvider";

const ResultPage = () => {
  const [result, setResult] = useState({});
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const destination = searchParams.get("destination");
  const ironhack = {
    lat: 52.53308,
    lng: 13.45321,
  };
  const { trips, setTrips } = useTripContext();

  useEffect(() => {
    if (lat && lng && destination && ironhack.lat && ironhack.lng) {
      axios
        .get(
          `https://graphhopper.com/api/1/route?point=${ironhack.lat},${
            ironhack.lng
          }&point=${lat},${lng}&locale=en&key=${
            import.meta.env.VITE_GRAPHHOPPER_API_KEY
          }`
        )
        .then((response) => {
          console.log(response.data);
          setResult({
            distance: response.data.paths[0].distance,
            time: response.data.paths[0].time,
            destination,
          });
          setTrips([...trips, result]);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [lat, lng]);

  return (
    <PageContainer>
      <PageHeader>Result</PageHeader>
      {!lat || !lng ? (
        <UserInput />
      ) : (
        result && <ResultContainer result={result} />
      )}
    </PageContainer>
  );
};

export default ResultPage;
