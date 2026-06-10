import { useNavigate } from "react-router-dom";
import "../App.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="page">

        <h1 style={{ marginBottom: "25px" }}>
          Create your <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input type="password" placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Company Name
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div style={{ marginTop: "15px" }}>
          <p>
            Are you an Agency? <span style={{ color: "red" }}>*</span>
          </p>

          <div style={{ marginTop: "10px" }}>
            <label>
              <input type="radio" name="agency" defaultChecked />
              {" "}Yes
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input type="radio" name="agency" />
              {" "}No
            </label>
          </div>
        </div>

        <button
          className="btn-primary"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Signup;