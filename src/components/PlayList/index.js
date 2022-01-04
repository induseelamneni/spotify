import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class PlayList extends Component {
  state = {playList: [], fetchingDataStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getFeaturedPlaylistsEditors()
  }

  getFeaturedPlaylistsEditors = async () => {
    this.setState({fetchingDataStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('pa_token')
    const options1 = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const responseUserName = await fetch(
      'https://api.spotify.com/v1/me',
      options1,
    )
    const userData = await responseUserName.json()

    const username = userData.display_name

    const apiUrl = `https://api.spotify.com/v1/users/${username}/playlists?limit=50`

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.items.map(each => ({
        id: each.id,
        name: each.name,
        tracksCount: each.tracks.total,
        imageUrl: each.images[0].url,
      }))
      console.log(updatedData)
      this.setState({
        playList: updatedData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryJobDetails = () => {
    this.getFeaturedPlaylistsEditors()
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

  successView = () => {
    const {playList} = this.state
    return (
      <>
        <h1 className="play-list-heading">Your Playlists</h1>
        <ul className="music-container">
          {playList.map(eachPlayList => (
            <li className="playlist-2-container" key={eachPlayList.id}>
              <img src={eachPlayList.imageUrl} alt="music" className="pic1" />

              <p className="my-fav-heading">{eachPlayList.name}</p>
              <p className="track-para-p">{eachPlayList.tracksCount}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

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
    return <div className="play-list-container">{this.renderData()}</div>
  }
}
export default PlayList
