/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import ResultContainer from "../components/ResultContainer";
import { useSearchParams } from "react-router-dom";
import UserInput from "../components/UserInput";
import axios from "axios";

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
          const newResults = responses.map((res, index) => ({
            destination: destination,
            distance: (res.data.paths[0].distance / 1000).toFixed(2),
            time: res.data.paths[0].time / 60000,
            profile: requests[index].profile,
          }));

          setResults(newResults);
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
        results && <ResultContainer results={results} />
      )}
    </PageContainer>
  );
};

export default ResultPage;
