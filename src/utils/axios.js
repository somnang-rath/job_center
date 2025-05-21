import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const useAxiosWithInterceptor = () => {
  const { accessToken, refreshToken } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });
  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      if (err.response?.status === 401) {
        try {
          const newToken = await refreshToken();
          err.config.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(err.config); // retry request
        } catch (refreshErr) {
          return Promise.reject(refreshErr);
        }
      }
      return Promise.reject(err);
    }
  );
  return axiosInstance;
};
export default axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});
