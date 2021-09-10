import './index.css'

const Profile = () => (
  <div className="home-container">
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/person-img.png"
        alt="profile"
        className="profile-img"
      />
    </div>
    <h1 className="user-heading">User Name</h1>
    <div className="followers-container">
      <div className="followers-inner-container">
        <p className="number">15</p>
        <p className="followers">FOLLOWERS</p>
      </div>
      <div className="followers-inner-container">
        <p className="number">70</p>
        <p className="followers">PLAYLISTS</p>
      </div>
    </div>
    <div className="button-container">
      <button className="logout-btn" type="button">
        Logout
      </button>
    </div>
  </div>
)
export default Profile
