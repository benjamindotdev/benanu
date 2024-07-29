/* eslint-disable react-refresh/only-export-components */
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
    getAllTrips();
    getAllUsers();
  }, []);

  const getTrip = (tripId) => {
    axios
      .get(`https://seeo2-backend-production.up.railway.app//trips/${tripId}`)
      .then((response) => {
        setTrip(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getUser = (userId) => {
    axios
      .get(`https://seeo2-backend-production.up.railway.app//users/${userId}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getAllTrips = () => {
    axios
      .get(`https://seeo2-backend-production.up.railway.app//trips`)
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getAllUsers = () => {
    axios
      .get(`https://seeo2-backend-production.up.railway.app//users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const postTrip = (reqBody) => {
    const id = trips.length + 1;
    axios
      .post(`https://seeo2-backend-production.up.railway.app//trips`, {
        origin: ironhack,
        id,
        ...reqBody,
      })
      .then((response) => {
        setTrip(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteUser = (userId) => {
    axios
      .delete(
        `https://seeo2-backend-production.up.railway.app//users/${userId}`
      )
      .then((response) => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteTrip = (tripId) => {
    axios
      .delete(`https://seeo2-backend-production.up.railway.app/trips/${tripId}`)
      .then((response) => {
        setTrips(trips.filter((trip) => trip.id !== tripId));
      })
      .catch((error) => {
        console.log(error.response);
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
        postTrip,
        getTrip,
        getUser,
        deleteUser,
        getAllTrips,
        getAllUsers,
        deleteTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

const useTripContext = () => useContext(TripContext);

export { TripProvider, useTripContext };
