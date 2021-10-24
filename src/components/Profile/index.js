import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'

class Profile extends Component {
  state = {
    userName: '',
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const token = Cookies.get('pa_token')

    const apiUrl = 'https://api.spotify.com/v1/me'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      this.setState({userName: fetchedData.display_name})
    }
  }

  render() {
    const {userName} = this.state
    return (
      <div className="home-container">
        <div className="profile-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/person-img.png"
            alt="profile"
            className="profile-img"
          />
        </div>
        <h1 className="user-heading">{userName}</h1>
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
  }
}
export default Profile
