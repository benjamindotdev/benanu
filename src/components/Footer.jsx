import {
  FaGithub,
  FaServer,
  FaComputer,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRailway, SiNetlify, SiDaisyui } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-light text-white rounded-t-3xl p-10 z-10 pt-0 pb-6 my-0 absolute bottom-0 bg-transparent flex flex-col gap-2">
      <div className="grid grid-flow-col gap-8">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <FaReact />
        </a>
        <a
          href="https://nodejs.org/"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <FaNodeJs />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <RiTailwindCssFill />
        </a>
        <a
          href="https://daisyui.com/"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <SiDaisyui />
        </a>
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <SiNetlify />
        </a>
        <a
          href="https://github.com/benjamindotdev/seeo2-frontend"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <FaComputer />
          <FaGithub />
        </a>
        <a
          href="https://railway.app"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <SiRailway />
        </a>
        <a
          href="https://github.com/benjamindotdev/seeo2-backend"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-1 text-4xl text-white hover:text-light"
        >
          <FaServer />
          <FaGithub />
        </a>
      </div>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by seeO2
        </p>
      </aside>
    </footer>
  );
}
