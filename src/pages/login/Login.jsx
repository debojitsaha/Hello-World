import React, { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/')
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World..!</h1>
          <ul>
            <li>Connect with your friends & family.</li>
            <li>Share a glimpse of your favourite moments.</li>
            <li>
              Let your friends know about your day through status updates.
            </li>
          </ul>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login.</h1>
          <form>
            <input type="email" placeholder="abc@email.com" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
