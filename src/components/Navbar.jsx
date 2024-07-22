/* eslint-disable react/prop-types */
const Navbar = ({ socials }) => {
  return (
    <nav className="navbar px-6 bg-dark text-light h-[5vh] flex flex-row justify-between items-center ">
      <h1 className="hover:text-accent text-2xl font-bold animate-pulse">
        CarbonTracker
      </h1>
      <ul className="flex flex-row gap-6">
        <li className="hover:text-accent">Home</li>
        <li className="hover:text-accent">About</li>
        <details className="dropdown">
          <summary className="hover:text-accent">Socials</summary>
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
