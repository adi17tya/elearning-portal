import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home", { replace: true });
  }

  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid">
        <span className="navbar-brand ms-5 text-white">Online Training</span>
        <ul className="nav justify-content-end ">
          <li className="nav-item ">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              href="#"
            >
              DashBord
            </Link> 
          </li>

          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="./courses"
            >
              Courses
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="./users">
              Users
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="./payments">
              Payments
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="./reports">
              Reports
            </Link>
          </li>

          <li className="nav-item">
            <button className="btn btn-dark" onClick={handleClick}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNav;
