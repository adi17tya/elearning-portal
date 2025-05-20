import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">
              Learn From The Best Online Courses
            </h2>

            <div className="input-group mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search for courses..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary btn-primary text-white"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-center mb-4">Featured Courses</h2>

        <div className="container container-xxl">
          <div className="row align-items-start gap-3 text-center">
            <div className="col">
              <div className="card">
                <span className="text-start">Course 1</span>
                <div className="card-body">
                  <h5 className="card-title">React for Beginnerss</h5>
                  <p className="card-text">Instructor: Jane Smith</p>
                  <a href="#" className="btn btn-success">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <span className="text-start">Course 2</span>
                <div className="card-body">
                  <h5 className="card-title">Python Data Science</h5>
                  <p className="card-text">Instructor: John Doe</p>
                  <a href="#" className="btn btn-success">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <span className="text-start">Course 2</span>
                <div className="card-body">
                  <h5 className="card-title">Python Data Science</h5>
                  <p className="card-text">Instructor: John Doe</p>
                  <a href="#" className="btn btn-success">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
