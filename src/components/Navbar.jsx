/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useInfoContext } from "../context/InfoContext";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Result",
    path: "/result",
  },
  {
    name: "Admin",
    path: "/admin",
  },
];

const Navbar = () => {
  const { founders } = useInfoContext();
  const [benjamin, senanu] = founders;
  console.log(founders);
  return (
    <nav className=" z-10 py-0 my-0 relative mx-auto px-6 bg-transparent text-white h-[10%] flex flex-row justify-between items-center rounded-b-3xl w-[600px] md:w-[800px] lg:e-[1000px] xl:w-[1200px]">
      <h1 className="hover:text-light text-2xl font-bold">seeO2</h1>
      <ul className="flex flex-row gap-6 font-bold">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className="hover:text-light"
              style={({ isActive }) => {
                return isActive ? { color: "pink" } : {};
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <details className="dropdown">
          <summary className="hover:text-light">Socials</summary>
          <ul tabIndex={0} className="menu dropdown-content text-white">
            <li>
              <a
                href={benjamin.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-light"
              >
                @benjamin
              </a>
            </li>
            <li>
              <a
                href={senanu.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-light"
              >
                @senanu
              </a>
            </li>
          </ul>
        </details>
      </ul>
    </nav>
  );
};

export default Navbar;
