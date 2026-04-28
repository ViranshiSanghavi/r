import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!data.username || !data.email || !data.password) {
      setError("All fields are required");
    } 
    else if (!data.email.includes("@")) {
      setError("Invalid email");
    } 
    else if (data.password.length < 6 || data.password.length > 12) {
      setError("Password must be 6-12 chars");
    } 
    else {
      setError("");
      alert("Login Successful");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <br />

        <input name="email" placeholder="Email" onChange={handleChange} />
        <br />

        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <br />

        <button>Login</button>
      </form>

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default App;