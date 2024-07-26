/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import { useInfoContext } from "../context/InfoContext";
import Logo from "../assets/logo.png";

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
];

const Navbar = () => {
  const { founders } = useInfoContext();
  const [benjamin, senanu] = founders;
  return (
    <nav className=" z-10 py-0 my-0 relative mx-auto px-6 bg-transparent text-light h-[10%] flex flex-row justify-between items-center rounded-b-3xl w-[600px] md:w-[800px] lg:e-[1000px] xl:w-[1200px]">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className="w-auto h-24 hover:scale-110 transition-scale duration-300"
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
        <details className="dropdown">
          <summary className="hover:text-primary">Socials</summary>
          <ul tabIndex={0} className="menu dropdown-content text-light">
            <li>
              <a
                href={benjamin.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Benjamin
              </a>
            </li>
            <li>
              <a
                href={senanu.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Senanu
              </a>
            </li>
          </ul>
        </details>
      </ul>
    </nav>
  );
};

export default Navbar;
