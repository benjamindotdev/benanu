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
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex flex-col items-center h-full w-full relative bg-${theme}`}
    >
      <Navbar />
      <main className="mx-auto top-0 absolute flex flex-col overflow-auto justify-start items-center z-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/about"
            element={
              <IsAnon>
                <AboutPage />
              </IsAnon>
            }
          />
          <Route
            path="/contact"
            element={
              <IsAnon>
                <ContactPage />
              </IsAnon>
            }
          />
          <Route
            path="/dashboard"
            element={
              <IsPrivate>
                <DashboardPage />
              </IsPrivate>
            }
          />
          <Route
            path="/result"
            element={
              <IsPrivate>
                <ResultPage />
              </IsPrivate>
            }
          />
          <Route
            path="/admin"
            element={
              <IsPrivate>
                <AdminPage />
              </IsPrivate>
            }
          />
          <Route
            path="/signup"
            element={
              <IsAnon>
                <SignupPage />
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                <LoginPage />
              </IsAnon>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
