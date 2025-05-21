import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      alert("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen space-y-5 lg:flex lg:justify-center lg:items-center lg:m-auto lg:space-x-10">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl font-bold">JOB</h1>
          <h1 className="text-teal-600 text-3xl font-bold pt-5">CENTER</h1>
        </div>
        <div className="text-blue-500 font-medium mt-5">
          Connect with friends and the world around you on Jobcenter.
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="p-4 max-w-sm mx-auto mt-10 border text-center rounded space-y-5"
        >
          <h1 className="text-xl mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded focus:outline-teal-200 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full rounded focus:outline-teal-200 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer">
            Login
          </button>
          <p className="text-teal-500">Forged Password</p>
          <div className="bg-gray-500 h-[1px]"></div>
          <button className="bg-teal-400 text-white px-4 py-2 font-bold text-2xl w-full rounded cursor-pointer">
            <p>Create acount</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
