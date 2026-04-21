import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../store/reducer/usersSlice";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - replace with real auth
    dispatch(login({ email, password }));
  };

  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state) => state.users || {});

  useEffect(() => {
    if (isLoggedIn) {
      alert("Logged in");
      dispatch(clearError());
      navigate("/");
    }
  }, [isLoggedIn, navigate, dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-sm text-gray-500 mb-6">Sign in to your account to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="Your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="px-4 py-2 rounded-md bg-[#E53935] text-white">Sign In</button>
              <Link to="/register" className="text-sm text-[#E53935] font-medium">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
