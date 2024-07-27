/* eslint-disable react/prop-types */
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const links = [
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
];

const Navbar = () => {
  const { theme } = useThemeContext();
  let location = useLocation();
  console.log(location);
  return (
    <nav
      className={`z-10 py-0 my-0 relative mx-auto px-6  h-[10%] flex flex-row justify-between items-center rounded-b-3xl w-[600px] md:w-[800px] lg:e-[1000px] xl:w-[1200px] ${
        theme === "light" ? "text-dark bg-light" : "text-light bg-dark"
      } ${location.pathname == "/" ? " bg-transparent" : ""}`}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className="w-auto h-[5vw] hover:scale-110 transition-scale duration-300"
        />
      </Link>
      <ul className="flex flex-row gap-6 font-bold">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className="hover:text-primary text-lg"
              style={({ isActive }) => {
                return isActive ? { color: "#DE99A3" } : {};
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
