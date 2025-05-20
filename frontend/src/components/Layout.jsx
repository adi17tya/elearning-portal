import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <span className="navbar-brand ms-5 ">Online Training</span>
          <ul className="nav justify-content-end ">
            <li className="nav-item ">
              <Link className="nav-link active " aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/courses"
              >
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="btn btn-light link-opacity-50-hover"
                to="/register"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
