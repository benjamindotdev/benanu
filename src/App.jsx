import "./App.css";
import { APIProvider, Map, Marker, Pin } from "@vis.gl/react-google-maps";
import UserInputform from "./components/UserInputform";

const ironhack = {
  lat: 52.53308,
  lng: 13.45321,
};

const dataLink = "https://ourworldindata.org/travel-carbon-footprint";

const App = () => (
  <main className="h-100vh w-100vw">
    <h1>Benanu</h1>
    <UserInputform />
    <p>
      Benanu is a simple web application that displays a map using the Google
      Maps API.
    </p>
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

export default App;
