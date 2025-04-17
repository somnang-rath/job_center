import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <h1>About Us</h1>,
      },
      {
        path: "contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "f&b",
        element: <h1>F&B</h1>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
