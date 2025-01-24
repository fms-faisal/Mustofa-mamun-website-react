import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

export default function Navbar({ loggedIn, setLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <header>
      <nav>
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/pages/teaching.html">Teaching</Link> </li>
                <li>
                  <details>
                    <summary>Courses</summary>
                    <ul className="p-2">
                      <li><Link to="/courses/Econ2110.html">ECON 2110</Link></li>
                      <li><Link to="/courses/Econ303.html">ECON 303</Link></li>
                      <li><Link to="/courses/Online_Econ2110.html">ECON 2110 (Online)</Link></li>
                      <li><Link to="/courses/Econ321.html">ECON 321</Link></li>
                    </ul>
                  </details>
                </li>
                {loggedIn && (<li><Link to="/add-files">Add Files</Link></li>)}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost hover:bg-transparent hover:text-green-500 text-xl">
              Mustofa Mamun
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex lg:gap-4">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border-green-500 border-2 rounded-lg bg-green-500 font-bold text-white" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/research"
                  className={({ isActive }) =>
                    isActive ? "border-green-500 border-2 rounded-lg bg-green-500 font-bold text-white" : ""
                  }
                >
                  Research
                </NavLink>
              </li>
              <li className="relative inline-block">
                <NavLink to="pages/teaching.html" className={({ isActive }) =>
                  isActive ? " border-green-500 border-2 rounded-lg font-semibold" : "font-semibold"
                }>
                  <span className="wave-char">T</span>
                  <span className="wave-char">e</span>
                  <span className="wave-char">a</span>
                  <span className="wave-char">c</span>
                  <span className="wave-char">h</span>
                  <span className="wave-char">i</span>
                  <span className="wave-char">n</span>
                  <span className="wave-char">g</span>
                </NavLink>
              </li>
              {loggedIn && (
                <li>
                  <NavLink
                    to="/add-files"
                    className={({ isActive }) =>
                      isActive ? "border-green-500 border-2 rounded-lg bg-green-500 font-bold text-white" : ""
                    }
                  >
                    Add Files
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end font-semibold">
            {!loggedIn ? (
              <Link to="/login">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="bg-red-400 text-white font-semibold px-4 py-2 rounded">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}