import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="py-5 px-20">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-10">
            <Link to="/">
              <h1 className="text-2xl font-bold">
                Blog<span className="text-yellow-400">Me</span>
              </h1>
            </Link>

            <div className="flex items-center">
              <Link to="/postblog" className="font-semibold text-sm">
                Post Blog
              </Link>
              <Link to="/myblogs" className="font-semibold text-sm">
                My Blogs
              </Link>
            </div>
          </div>

          {/* <div>
            <button
              type="button"
              className="text-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2 mr-2 "
            >
              Log In
            </button>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2"
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
