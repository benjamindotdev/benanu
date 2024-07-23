import { useEffect, useState } from "react";
import UserInputForm from "./components/UserInput";
import {
  APIProvider,
  Map,
  Marker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";

const ironhack = {
  lat: 52.53308,
  lng: 13.45321,
};

const UserMap = () => {
  const [destination, setDestination] = useState("");

  const map = useMap();

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
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      className="flex flex-col justify-center"
    >
      <UserInputForm
        destination={destination}
        setDestination={setDestination}
      />
      <Map
        style={{ width: "500px", height: "500px" }}
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
  );
};

export default UserMap;
