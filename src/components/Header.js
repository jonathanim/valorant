import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="w-full justify-center text-center m-5 px-10 py-10"
      style={{ backgroundColor: "#fa4454" }}
    >
      <Link
        to="/"
        className="text-2xl font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-500"
      >
        Home
      </Link>
      <Link
        to="/characters"
        className="text-2xl font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Characters
      </Link>
      <Link
        to="/maps"
        className="text-2xl font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Maps
      </Link>
      <Link
        to="/weapons"
        className="text-2xl font-bold px-5 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Weapons
      </Link>
    </nav>
  );
};

export default Header;
