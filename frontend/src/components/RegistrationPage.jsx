import React from "react";

const RegistrationPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <span className="fs-1 text-center mb-4">Registration Form</span>
          <div className="col-md-6 ">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="RegisName"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="loginPassword"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100 mt-2">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
