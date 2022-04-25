import React from "react";
import { Link } from "react-router-dom";
import "./sidbar.css";

export default function Sidebar() {
  return (
    <>
      <div
        className="relative min-h-screen flex sidebar-hide"
        data-dev-hint="container"
      >
        <aside
          id="sidebar"
          className="bg-gray-800 mt-2 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <nav data-dev-hint="main navigation">
              <Link
                to="/"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                <span className="ml-6">Main Page</span>
              </Link>
              <Link
                to="/product"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                <span className="ml-6">product</span>
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
