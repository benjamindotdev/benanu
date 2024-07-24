/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const ironhack = {
    lat: 52.53308,
    lng: 13.45321,
  };
  const [trip, setTrip] = useState({});
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/trips`)
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    axios
      .get(`http://localhost:5005/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const postData = (reqBody) => {
    axios
      .post(`http://localhost:5005/trips`, {
        origin: ironhack,
        ...reqBody,
      })
      .then((response) => {
        setTrip(response.data).catch((error) => {
          console.log(error.response);
        });
      });
  };

  return (
    <TripContext.Provider
      value={{
        trips,
        setTrips,
        users,
        setUsers,
        trip,
        setTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

const useTripContext = () => useContext(TripContext);

export { TripProvider, useTripContext };
