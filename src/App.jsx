import "./index.css";
import {
  APIProvider,
  Map,
  Marker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import UserInputForm from "./components/UserInputform";
import Navbar from "./components/Navbar";
import Result from "./components/Results";
const ironhack = {
  lat: 52.53308,
  lng: 13.45321,
};

//link for data "https://ourworldindata.org/travel-carbon-footprint";

const App = () => {
  const map = useMap();

  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (!map) return;
    map.setOptions({
      styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }],
    });
  }, [map]);

  useEffect(() => {
    console.log(destination);
  }, [destination]);

  return (
    <main className="h-100vh w-100vw flex flex-col gap-6">
      <Navbar />
      <div className="flex flex-row gap-6 card">
        <Result mode="car" cost={50} distance={200} co2Emissions={30} />
        <Result mode="train" cost={50} distance={200} co2Emissions={30} />
        <Result mode="plane" cost={50} distance={200} co2Emissions={30} />
      </div>

      <h1>Benanu</h1>
      <p>
        Benanu is a simple web application that displays a map using the Google
        Maps API.
      </p>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <UserInputForm
          destination={destination}
          setDestination={setDestination}
        />
        <Map
          style={{ width: "90vh", height: "90vw" }}
          defaultCenter={{ ...ironhack }}
          defaultZoom={15}
          gestureHandling={"greedy"}
        >
          <Marker position={{ ...ironhack }}>
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </Marker>
        </Map>
      </APIProvider>
    </main>
  );
};

export default App;
