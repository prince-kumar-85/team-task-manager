import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Member",
    adminSecret: ""
  });

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", data);

      alert("Signup successful");

      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };
   return (
    <div style={{ width: 350, margin: "100px auto" }}>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

      <br /><br />

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

      <label>
        <input
          type="checkbox"
          onChange={(e) =>
            setData({
              ...data,
              role: e.target.checked ? "Admin" : "Member"
            })
          }
           />
        Register as Admin
      </label>

      <br /><br />

      {data.role === "Admin" && (
        <>
          <input
            placeholder="Admin Secret"
            onChange={(e) =>
              setData({
                ...data,
                adminSecret: e.target.value
              })
            }
          />
          <br /><br />
        </>
      )}

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have an account?
        <Link to="/"> Login</Link>
      </p>
    </div>
  );
}
