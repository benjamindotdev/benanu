import "./index.css";
import {
  APIProvider,
  Map,
  Marker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import UserInputForm from "./components/UserInput";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ResultContainer from "./components/ResultContainer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";

const ironhack = {
  lat: 52.53308,
  lng: 13.45321,
};

//link for data "https://ourworldindata.org/travel-carbon-footprint";

const socials = {
  benjamin: "https://github.com/benjamindotdev/",
  senanu: "https://github.com/Senalniho",
};

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

  //add routes, route, links from react-router-dom

  return (
    <div className="mx-auto w-[600px] md:w-[700px] lg:w-[1000px] xl:[1200px]">
      <Navbar socials={socials} />
      <main className=" flex flex-col gap-6 justify-start items-center p-6">
        <Routes>
          <Route path="/about" element={<AboutPage socials={socials} />} />
          <Route path="/contact" element={<ContactPage socials={socials} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/" element={<LandingPage />} />
           />
          <Route path="/results" element={<ResultsPage />} /> */}
        </Routes>

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
      </main>
    </div>
  );
};

export default App;
