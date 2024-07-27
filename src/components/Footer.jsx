/* eslint-disable react/jsx-key */
import {
  FaGithub,
  FaServer,
  FaComputer,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRailway, SiNetlify, SiDaisyui } from "react-icons/si";
import FooterIcon from "./FooterIcon";
import { useThemeContext } from "../context/ThemeContext";

const items = [
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    icon: <FaNodeJs />,
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "DaisyUI",
    link: "https://daisyui.com/",
    icon: <SiDaisyui />,
  },
  {
    name: "Netlify",
    link: "https://www.netlify.com/",
    icon: <SiNetlify />,
  },
  {
    name: "GitHub",
    link: "https://github.com/benjamindotdev/seeo2-frontend",
    icon: [<FaComputer />, <FaGithub />],
  },
  {
    name: "Railway",
    link: "https://railway.app",
    icon: <SiRailway />,
  },
  {
    name: "GitHub",
    link: "https://github.com/benjamindotdev/seeo2-backend",
    icon: [<FaServer />, <FaGithub />],
  },
];

export default function Footer() {
  const { theme } = useThemeContext();
  return (
    <footer
      className={`footer footer-center rounded-t-3xl p-10 z-10 pt-0 pb-6 my-0 absolute bottom-0 bg-transparent flex flex-col gap-2 ${
        theme === "light" ? "text-dark" : "text-light"
      }`}
    >
      <div className="grid grid-flow-col gap-8">
        {items.map((item, index) => (
          <FooterIcon key={index} link={item.link}>
            {item.icon}
          </FooterIcon>
        ))}
      </div>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by seeO2
        </p>
      </aside>
    </footer>
  );
}
