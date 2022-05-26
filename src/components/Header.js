import React from "react";
import { NavLink } from "react-bootstrap";

function Header() {
  return (
    <>
    <header  className="py-3">
      <nav className="flex flex-row justify-between uppercase">
      <h1 className="text-3xl p-5 ">Book A Movie</h1>
        <ul className="flex flex-row items-center px-5">
          <li><NavLink className="text-black">Home</NavLink></li>
          <li><NavLink className="text-black">Movies</NavLink></li>
          <li><NavLink className="text-black">Cinemas</NavLink></li>
        </ul>
      </nav>
    </header>
      
    </>
  );
}

export default Header;
