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
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const destination = searchParams.get("destination");
  const ironhack = {
    lat: 52.53308,
    lng: 13.45321,
  };
  const { trips, setTrips } = useTripContext();

  const types = [
    {
      profile: "car",
      url: `https://graphhopper.com/api/1/route?point=${ironhack.lat},${
        ironhack.lng
      }&point=${lat},${lng}&locale=en&key=${
        import.meta.env.VITE_GRAPHHOPPER_API_KEY
      }&profile=car`,
    },
    {
      profile: "bike",
      url: `https://graphhopper.com/api/1/route?point=${ironhack.lat},${
        ironhack.lng
      }&point=${lat},${lng}&locale=en&key=${
        import.meta.env.VITE_GRAPHHOPPER_API_KEY
      }&profile=bike`,
    },
    {
      profile: "foot",
      url: `https://graphhopper.com/api/1/route?point=${ironhack.lat},${
        ironhack.lng
      }&point=${lat},${lng}&locale=en&key=${
        import.meta.env.VITE_GRAPHHOPPER_API_KEY
      }&profile=foot`,
    },
  ];

  const requests = types.map((type) => {
    return {
      request: axios.get(type.url),
      profile: type.profile,
    };
  });

  //https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios

  useEffect(() => {
    if (lat && lng && destination && ironhack.lat && ironhack.lng) {
      axios
        .all(requests.map((req) => req.request))
        .then((responses) => {
          responses.forEach((res, index) => {
            const result = {
              destination: destination,
              distance: res.data.paths[0].distance,
              time: res.data.paths[0].time,
              profile: requests[index].profile,
            };
            console.log("result =", result);
            setResults((prev) => [...prev, result]);
          });
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {
          console.log("results =", results);
          setTrips([...trips, results]);
        });
    }
  }, [lat, lng]);

  return (
    <PageContainer>
      <PageHeader>Result</PageHeader>
      {!lat || !lng ? (
        <UserInput />
      ) : (
        results && <ResultContainer results={results} />
      )}
    </PageContainer>
  );
};

export default ResultPage;
