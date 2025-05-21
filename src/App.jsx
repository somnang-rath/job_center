// ✅ App.jsx
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PostJob from "./pages/PostJob";
import RootLayout from "./layout/RootLayout";

function App() {
  const { accessToken, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {accessToken ? (
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="postjob" element={<PostJob />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

export default App;
