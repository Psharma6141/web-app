import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  const register = async () => {
    try {
      await api.post("/auth/register", data);
      alert("Registered Successfully");
      nav("/");
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <input
          className="w-full p-2 mb-4 rounded bg-slate-800 outline-none"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

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
          onClick={register}
          className="w-full bg-emerald-600 hover:bg-emerald-700 p-2 rounded font-semibold"
        >
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
