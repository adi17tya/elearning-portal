import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="navbar bg-light ">
      <div className="container-fluid">
        <span className="navbar-brand ms-5 ">Online Training</span>
        <ul className="nav justify-content-end ">
          <li className="nav-item ">
            <Link className="nav-link active " aria-current="page" to="/home">
              My Courses
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/courses">
              Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
