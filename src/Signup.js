import React, { useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [accountCreated, setAccountCreated] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setAccountCreated(true);
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return accountCreated == false ? (
    <>
      <div>
        <h1>SIGN UP</h1>
        {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="email"
            ref={emailRef}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            ref={passwordRef}
            required
          />

          <input
            placeholder="password"
            type="password"
            id="password-confirm"
            ref={passwordConfirmRef}
            required
          />

          <button disabled={loading} className="submit" type="submit">
            Login
          </button>
        </form>
      </div>
      <small>
        Don't have an account yet?{" "}
        <Link className="link" to="/signup">
          Signup
        </Link>{" "}
        for one
      </small>
    </>
  ) : (
    <Alert className="alert-signin" variant="outlined" severity="success">
      Account created!
    </Alert>
  );
}
