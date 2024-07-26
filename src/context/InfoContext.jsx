/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const founders = [
    {
      name: "Benjamin",
      role: "Fullstack Developer",
      github: "http://github.com/benjamindotdev",
      linkedin: "http://linkedin.com/in/benjamindotdev",
      portfolio: "benjamin.dev",
      image:
        "https://ca.slack-edge.com/T075V6BQBRD-U0777UD9FKK-e19ba49cc10d-512",
    },
    {
      name: "Senanu",
      role: "Fullstack Developer",
      github: "https://github.com/Senalniho",
      linkedin: "https://www.linkedin.com/in/adjabengsenanu/",
      image:
        "https://media.licdn.com/dms/image/C4E03AQG-6fwOkKofTg/profile-displayphoto-shrink_800_800/0/1651685289139?e=1727308800&v=beta&t=yonrzcZQEokCKELpO71cneL2_C8SsI0d1OrxeiW5u-M",
    },
  ];

  return (
    <InfoContext.Provider value={{ founders }}>{children}</InfoContext.Provider>
  );
};

const useInfoContext = () => useContext(InfoContext);

export { InfoProvider, useInfoContext };
