import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-john shop? <Link to="/register">Create Account</Link>
          <div>-----------or-----------</div>
          <button onClick={handleGoogleLogin} className="btn-regular">
            Google Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
