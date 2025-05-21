// router.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import PostJob from "../pages/PostJob";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";

export const mainRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />, // ✅ ការពារ route
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "aboutUs", element: <AboutUs /> },
          { path: "contact", element: <Contact /> },
          { path: "postjob", element: <PostJob /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
]);
