import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="container flex justify-center"
      style={{ backgroundColor: "#fa4454" }}
    >
      <Link
        to="/"
        className="font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <Link
        to="/characters"
        className="font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Characters
      </Link>
      <Link
        to="/maps"
        className="font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Maps
      </Link>
      <Link
        to="/weapons"
        className="font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Weapons
      </Link>
    </nav>
  );
};

export default Header;
