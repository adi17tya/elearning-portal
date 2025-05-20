import React from "react";

const PaymentManagement = () => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Payment & Subscription Tracking</h2>

      <div>
        <table class="table table-light table-hover text-left">
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>User</th>
              <th>Course</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TXN12345</td>
              <td>John Doe</td>
              <td>Web Development</td>
              <td>$99</td>
              <td>
                <span className="badge text-bg-success">Completed</span>
              </td>
              <td>2024-02-20</td>
              <td>
                <button className="btn btn-info">View</button>
                <button className="btn btn-danger ms-2">Refund</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagement;
