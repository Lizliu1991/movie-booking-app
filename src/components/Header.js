import React from "react";
import { NavLink } from "react-bootstrap";

function Header() {
  return (
    <>
    <header  className=" bg-gray-800 text-white">
      <nav className="flex flex-row justify-between  uppercase p-0">
      <h1 className=" hidden md:inline text-3xl p-5">Book A Movie</h1>
        <ul className="flex flex-row items-center px-5">
          <li><NavLink className="text-white">Home</NavLink></li>
          <li><NavLink className="text-white">Movies</NavLink></li>
          <li><NavLink className="text-white">Cinemas</NavLink></li>
        </ul>
      </nav>
    </header>
      
    </>
  );
}

export default Header;
