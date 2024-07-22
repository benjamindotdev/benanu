import "./App.css";
import {
  APIProvider,
  Map,
  Marker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import UserInputForm from "./components/UserInputform";

const ironhack = {
  lat: 52.53308,
  lng: 13.45321,
};

const dataLink = "https://ourworldindata.org/travel-carbon-footprint";

const App = () => {
  const map = useMap();

  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (!map) return;
    map.setOptions({
      styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }],
    });
  }, [map]);

  return (
    <main className="h-100vh w-100vw">
      <h1>Benanu</h1>
      <p>
        Benanu is a simple web application that displays a map using the Google
        Maps API.
      </p>
      <UserInputForm
        destination={destination}
        setDestination={setDestination}
      />
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
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
