/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// src/pages/LoginPage.jsx

import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import { useThemeContext } from "../context/ThemeContext";

const API_URL = "http://localhost:5173";

function LoginPage(props) {
  const { theme } = useThemeContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { storeToken } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <PageContainer>
      <PageHeader>Login</PageHeader>

      <form
        onSubmit={handleLoginSubmit}
        className={`w-3/4 flex flex-col gap-4 card p-6 shadow-2xl ${
          theme === "light" ? "bg-light2 text-dark" : "bg-dark2 text-light"
        }`}
      >
        <div className="group w-full flex flex-row gap-2 justify-between items-center">
          <label className="text-xl group-hover:text-secondary group-hover:scale-110">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            autoComplete="off"
            className={`w-3/4 input ${
              theme === "light" ? "bg-light" : "bg-dark"
            }`}
          />
        </div>
        <div className="group w-full flex flex-row gap-2 justify-between items-center">
          <label className="text-xl group-hover:text-secondary group-hover:scale-110">
            Password:
          </label>
          <div className="w-3/4 flex flex-row justify-between">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePassword}
              autoComplete="off"
              className={`w-full rounded-r-none input ${
                theme === "light" ? "bg-light" : "bg-dark"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`w-2/10 btn rounded-l-none hover:bg-secondary ${
                theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className={`btn  hover:bg-secondary ${
            theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        >
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div
        className={`w-3/4 flex flex-row gap-4 card p-6 shadow-2xl ${
          theme === "light" ? "bg-light2 text-dark" : "bg-dark2 text-light"
        }`}
      >
        <p>Don't have an account yet?</p>
        <button
          type="button"
          className={`w-3/4 btn hover:bg-secondary ${
            theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        >
          <Link to={"/signup"}> Sign Up</Link>
        </button>
      </div>
    </PageContainer>
  );
}

export default LoginPage;
