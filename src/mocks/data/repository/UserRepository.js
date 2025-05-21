const API_URL = "http://localhost:3001/users";

export const getAllUsers = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getUserByEmail = async (email) => {
  const res = await fetch(`${API_URL}?email=${email}`);
  const users = await res.json();
  return users[0]; // Email is unique
};

export const createUser = async (userData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await res.json();
};
