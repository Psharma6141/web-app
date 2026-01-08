import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({});
  const nav = useNavigate();

  const login = async () => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

        <input
          className="w-full p-2 mb-4 rounded bg-slate-800 outline-none"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-2 mb-4 rounded bg-slate-800 outline-none"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button
          onClick={login}
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          New user?{" "}
          <Link to="/register" className="text-indigo-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
