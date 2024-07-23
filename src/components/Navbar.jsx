/* eslint-disable react/prop-types */
const Navbar = ({ socials }) => {
  return (
    <nav className="navbar px-6 bg-light text-white h-[5vh] flex flex-row justify-between items-center ">
      <h1 className="hover:text-light text-2xl font-bold">seeO2</h1>
      <ul className="flex flex-row gap-6">
        <li className="hover:text-light">Home</li>
        <li className="hover:text-light">About</li>
        <details className="dropdown">
          <summary className="hover:text-light">Socials</summary>
          <ul tabIndex={0} className="menu dropdown-content bg-dark text-light">
            <li>
              <a
                href={socials.benjamin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                @benjamin
              </a>
            </li>
            <li>
              <a
                href={socials.senanu}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
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
