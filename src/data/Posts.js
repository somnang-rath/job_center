// import { createContext } from "react";
// import api from "./api";
// const DataAPI = createContext();
// const getPosts = async (token) => {
//   try {
//     const res = await api.get("/posts", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(typeof res.data.posts, res.data.posts);
//     return res.data.posts ? res.data.posts : [];
//   } catch (error) {
//     console.log("Get Post Error:", error);
//     return [];
//   }
// };

// export default getPosts;
