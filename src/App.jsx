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

const App = () => {
  return (
    <div className="flex flex-col items-center h-full w-full relative bg-dark">
      <Navbar />
      <main className="mx-auto top-0 absolute flex flex-col overflow-auto justify-start items-center z-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
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
