/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

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

const Navbar = ({ socials }) => {
  return (
    <nav className=" py-0 my-0 px-6 bg-light text-white h-[5%] hover:shadow-2xl flex flex-row justify-between items-center rounded-b-3xl">
      <h1 className="hover:text-dark text-2xl font-bold">seeO2</h1>
      <ul className="flex flex-row gap-6 font-bold">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className="hover:text-accent"
              style={({ isActive }) => {
                return isActive ? { color: "black" } : {};
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <details className="dropdown">
          <summary className="hover:text-dark">Socials</summary>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-light text-white shadow-lg"
          >
            <li>
              <a
                href={socials.benjamin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-dark"
              >
                @benjamin
              </a>
            </li>
            <li>
              <a
                href={socials.senanu}
                target="_blank"
                rel="noreferrer"
                className="hover:text-dark"
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
