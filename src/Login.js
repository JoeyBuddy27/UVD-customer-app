import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "./AuthContext";
import Alert from "@material-ui/lab/Alert";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, isLoggedOut, currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Username or password is incorrect");
    }
    setLoading(false);
  }

  console.log();

  return (
    <div className="login">
      <h1>LOGIN</h1>
      {isLoggedOut && <h2>You have been logged out</h2>}
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <div>
            <button disabled={loading} className="submit" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <small>
        Don't have an account yet?{" "}
        <Link className="link" to="/signup">
          Signup
        </Link>{" "}
        for one
      </small>
    </div>
  );
};

export default Login;
