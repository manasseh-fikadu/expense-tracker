import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";

import "../App.css";

export default function SignUpPage() {
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useHistory(); 


  const { register } = useContext(GlobalContext);

  const onSubmit = (e) => {
      e.preventDefault();

    const newUser = {
      name: first_name,
      email: email,
      password: password,
    };

    register(newUser);

    navigator.push("/");
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/" onSubmit={onSubmit}>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>

        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
