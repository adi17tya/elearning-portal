import React from 'react'
import AdminNav from './AdminNav'
import { Outlet } from 'react-router-dom'

const AdminDashBoard = () => {
  return (
    <>
    <AdminNav />
    <Outlet />
    </>
  )
}

export default AdminDashBoard