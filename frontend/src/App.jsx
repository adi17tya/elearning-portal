import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import CoursesPage from "./components/CoursesPage.jsx";
import Layout from "./components/Layout.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";
import UserDashBoard from "./components/Users/UserDashBoard.jsx";
import AdminDashBoard from "./components/Admin/AdminDashBoard.jsx";
import UserManagement from "./components/Admin/UserManagement.jsx";
import PaymentManagement from "./components/Admin/PaymentManagement.jsx";
import ReportDashboard from "./components/Admin/ReportDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <LandingPage /> },
      { path: "/courses", element: <CoursesPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegistrationPage /> },
    ],
  },
  {
    path: "/userdashboard",
    element: <UserDashBoard />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashBoard />,
    children: [
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "payments",
        element: <PaymentManagement />,
      },
      {
        path: "reports",
        element: <ReportDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
