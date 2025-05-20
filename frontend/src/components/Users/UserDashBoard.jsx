import React from "react";
import UserNav from "./UserNav";
import { Outlet } from "react-router-dom";

const UserDashBoard = () => {
  return (
    <>
      <UserNav />
      <Outlet />
    </>
  );
};

export default UserDashBoard;
