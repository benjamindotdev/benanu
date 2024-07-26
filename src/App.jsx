import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import ResultPage from "./pages/ResultPage";
import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";

const socials = {
  benjamin: "https://github.com/benjamindotdev/",
  senanu: "https://github.com/Senalniho",
};

const App = () => {
  return (
    <div className="mx-auto h-full w-full relative">
      <Navbar socials={socials} />
      <main className="h-[100%] top-0 absolute flex flex-col overflow-auto justify-start items-center z-0">
        <Routes>
          <Route path="/" element={<LandingPage socials={socials} />} />
          <Route path="/about" element={<AboutPage socials={socials} />} />
          <Route path="/contact" element={<ContactPage socials={socials} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/:db/:id" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
