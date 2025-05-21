import React, { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import { AuthContext } from "../context/AuthContext";
export const DataAPI = createContext();
const DataProvider = ({ children }) => {
  const { accessToken } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const getPosts = async (token) => {
    try {
      const res = await api.get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(typeof res.data.posts, res.data.posts);
      return res.data.posts ? res.data.posts : [];
    } catch (error) {
      console.log("Get Post Error:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      if (!accessToken) return;
      const data = await getPosts(accessToken);
      setPosts(data);
      console.log("data Post", data);
    };
    console.log("Posts state:", posts);
    fetchPosts();
  }, [accessToken]);
  return <DataAPI.Provider value={posts}>{children}</DataAPI.Provider>;
};

export default DataProvider;
