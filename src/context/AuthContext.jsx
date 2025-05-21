import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToke] = useState(
    localStorage.getItem("access_token") || null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
  });

  const login = async (email, password) => {
    const res = await api.post("/login", { email, password });
    const token = res.data.access_token;
    setAccessToke(token);
    localStorage.setItem("access_token", token);
    await fetchUser(token);
    await posts(token);
  };

  const logout = () => {
    setAccessToke(null);
    setUser(null);
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const refreshToken = async () => {
    try {
      const hasCookie = document.cookie.includes("refresh_token");
      if (!hasCookie) throw new Error("No refresh token");

      const res = await api.post("/refresh");
      const newToken = res.data.access_token;
      setAccessToke(newToken);
      localStorage.setItem("access_token", newToken);
      await fetchUser(newToken);
      return newToken;
    } catch (error) {
      console.log("Token refresh failed", error);
      logout();
      throw error;
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (!accessToken) {
          const res = await api.post("/refresh");
          const token = res.data.access_token;
          setAccessToke(token);
          localStorage.setItem("access_token", token);
          await fetchUser(token);
        } else {
          await fetchUser(accessToken);
        }
      } catch (error) {
        console.log("Auto-login failed", error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  const posts = async (token) => {
    try {
      const res = await api.get("/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGetData(res.data);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  // Get Data from to API

  const [user, setUser] = useState(null);
  const fetchUser = async (token) => {
    try {
      const res = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  console.log(getData);
  console.log(user);
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isLoading,
        login,
        logout,
        refreshToken,
        getData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
