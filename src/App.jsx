import "./App.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const App = () => (
  <main className="h-100vh w-100vw">
    <h1>Benanu</h1>
    <p>
      Benanu is a simple web application that displays a map using the Google
      Maps API.
    </p>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "90vh", height: "90vw" }}
        defaultCenter={{ lat: 52.53308, lng: 13.45321 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
      />
    </APIProvider>
  </main>
);

export default App;
