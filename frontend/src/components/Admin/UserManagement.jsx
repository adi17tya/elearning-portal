import React from "react";

const UserManagement = () => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Course Management</h2>
      <button className="btn btn-primary mb-3">Add New Course</button>
      <div>
        <table class="table table-light table-hover text-left">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alice Johnson</td>
              <td>alice@example.com</td>
              <td>Student</td>
              <td>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
