import { useNavigate } from "react-router-dom";
import "../App.css";

function Landing() {

  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div
        className="page"
        style={{
          minHeight: "812px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end" ,
          paddingBottom: "40px"
        }}
      >
        <h1 className="title">Welcome to PopX</h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;