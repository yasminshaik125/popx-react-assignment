import "../App.css";

function Profile() {
  return (
    <div className="mobile-container">
      <div className="profile-page">

        <div className="profile-header">
          Account Settings
        </div>

        <div className="profile-card">

          <div className="profile-info">

            <div
              style={{
                position: "relative"
              }}
            >
              <img
              src="/profile.png"
              alt="profile"
              className="profile-image"
              />

              <div className="camera-icon">
                📷
              </div>
            </div>

            <div className="profile-text">
              <h3>Marry Doe</h3>
              <p>MarryDoe@gmail.com</p>
            </div>

          </div>

          <div className="profile-desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </div>

          <div className="profile-divider"></div>

        </div>

      </div>
    </div>
  );
}

export default Profile;