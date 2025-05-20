import React from "react";

const ReportDashboard = () => {
  return (
    <div className="container ">
      <h1 className="fs-1 mt-4 ms-3">Reports Dashboard</h1>

      <div className="row ">
        <div className="col p-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Reports</h5>
              <button className="btn btn-primary">View Reports</button>
            </div>
          </div>
        </div>

        <div className="col p-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Reports</h5>
              <button className="btn btn-primary">Course Reports</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col p-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Financial Reports</h5>
              <button className="btn btn-primary">View Reports</button>
            </div>
          </div>
        </div>

        <div className="col p-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Business Reports</h5>
              <button className="btn btn-primary">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;
