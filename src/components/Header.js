import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/place">Places</Link>
            </li>
            <li>
              <Link to="/extraoffer">Offer!</Link>
            </li>
            {user?.email ? (
              <li onClick={handleLogout}>
                <Link>Log Out</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-mono">
          <span className="text-orange-500">Dream</span>
          <span className="text-fuchsia-500">Escape</span>
        </Link>
        {user && (
          <p className="text-white font-semibold">
            User:{" "}
            <span className="text-amber-500 text-lg font-mono">
              {user?.email}
            </span>
          </p>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/place">Places</Link>
          </li>
          <li>
              <Link to="/extraoffer">Offer!</Link>
          </li>
          {user?.email ? (
            <li onClick={handleLogout}>
              <Link>Log Out</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/place"
          className="btn bg-blue-600 hover:bg-blue-800 text-white"
        >
          Booking Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
