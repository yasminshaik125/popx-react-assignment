import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="page">

        <h1 style={{marginTop:"40px"}}>
          Signin to your <br /> PopX account
        </h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button
          className="gray-btn"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;