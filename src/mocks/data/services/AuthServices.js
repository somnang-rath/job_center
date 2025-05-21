import { getUserByEmail, createUser } from "../repositories/UserRepository.js";

export const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (user && user.password === password) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const registerUser = async (data) => {
  const existingUser = await getUserByEmail(data.email);
  if (existingUser) throw new Error("Email already exists");
  return await createUser(data);
};

export const AutoLogin = () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return null;
};
