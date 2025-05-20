import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, SetName] = useState("");
  const [pwd, SetPwd] = useState("");

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    console.log(name, pwd);
    if (name === "user") {
      navigate("/userdashboard");
    } else {
      navigate("/admindashboard");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <span className="fs-1 text-center mb-4">Log in to your account</span>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="loginEmail"
                onChange={(e) => SetName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                onChange={(e) => SetPwd(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
              onClick={handleClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
