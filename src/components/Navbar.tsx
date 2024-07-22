import React from "react";

const Navbar = () => {
  return (
    <nav className="px-6 bg-primary h-[5vh] flex flex-row justify-between items-center ">
      <h1 className="text-accent text-xl">Benanu</h1>
      <ul className="flex flex-row gap-6">
        <li className="text-accent">Home</li>
        <li className="text-accent">About</li>
        <li className="text-accent">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
