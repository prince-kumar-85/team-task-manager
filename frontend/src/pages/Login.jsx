import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.msg || "Login Failed");
    }
     };

  return (
    <div style={{ width: 350, margin: "100px auto" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
         />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account?
        <Link to="/signup"> Register</Link>
      </p>
    </div>
  );
}