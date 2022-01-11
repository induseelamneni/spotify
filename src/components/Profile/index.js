import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Profile extends Component {
  state = {
    userProfile: '',
    fetchingDataStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    this.setState({fetchingDataStatus: apiStatusConstants.inProgress})
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
      console.log(fetchedData)
      const updatedProfileData = {
        id: fetchedData.id,
        country: fetchedData.country,
        userName: fetchedData.display_name,
        playList: 15,
        followers: fetchedData.followers.total,
      }
      console.log(updatedProfileData)
      this.setState({
        userProfile: updatedProfileData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  successView = () => {
    const {userProfile} = this.state
    return (
      <div className="profile-container-main">
        <div className="profile-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/person-img.png"
            alt="profile"
            className="profile-img"
          />
        </div>
        <h1 className="user-heading">{userProfile.userName}</h1>
        <div className="followers-container">
          <div className="followers-inner-container">
            <p className="number">{userProfile.followers}</p>
            <p className="followers">FOLLOWERS</p>
          </div>
          <div className="followers-inner-container">
            <p className="number">{userProfile.playList}</p>
            <p className="followers">PLAYLISTs</p>
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

  onClickRetryJobDetails = () => {
    this.getUserDetails()
  }

  failureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="retry-heading">Oops! Something Went Wrong </h1>
      <p className="retry-heading retry-para">
        we cannot find the page you are looking for
      </p>
      <button
        className="retry-btn"
        type="button"
        onClick={this.onClickRetryJobDetails}
      >
        Retry
      </button>
    </div>
  )

  loadingView = () => (
    <div className="failure-container" testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderData = () => {
    const {fetchingDataStatus} = this.state
    switch (fetchingDataStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loadingView()

      default:
        return null
    }
  }

  render() {
    return <div className="profile-container-outer">{this.renderData()}</div>
  }
}
export default Profile
