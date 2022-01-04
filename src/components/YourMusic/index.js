import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import YourMusicSongsItem from '../yourMusicSongsItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class YourMusic extends Component {
  state = {
    fetchingDataStatus: apiStatusConstants.initial,
    music: [],
    selectedSongName: '',
    selectSongId: '',
  }

  componentDidMount() {
    this.getFeaturedPlaylistsEditors()
  }

  getFeaturedPlaylistsEditors = async () => {
    this.setState({fetchingDataStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('pa_token')

    const apiUrl = `https://api.spotify.com/v1/me/tracks`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const musicData = fetchedData

      const updatedMusicData = musicData.items.map(each => ({
        time: each.added_at,
        id: each.track.id,

        imageUrl: each.track.album.images[0].url,
        songName: each.track.name,
        MovieName: each.track.album.artists[0].name,
      }))

      this.setState({
        music: updatedMusicData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  selectedSong = id => {
    const {music} = this.state
    this.setState({
      selectedSongName: music.songName,
      selectSongId: id,
    })
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
    const {selectedSongName, selectSongId, music} = this.state

    return (
      <>
        <h1 className="play-list-heading">Your Music</h1>
        <ul className="music-ul-container">
          {music.map(item => (
            <YourMusicSongsItem
              key={item.id}
              selectedSong={this.selectedSong}
              songsList={item}
              isSongSelected={selectSongId === item.id}
            />
          ))}
        </ul>
        <div className="bottom-container">
          <div className="img-container">
            <img
              src={selectedSongName.imageUrl}
              alt="song-play"
              className="play-img"
            />
          </div>
          <div className="bottom-song-name-container">
            <h1 className="song-name-heading">{selectedSongName.songName}</h1>
            <p className="music-name">{selectedSongName.MovieName}</p>
          </div>

          <div className="music-play-img">
            <audio src="Bell.mp3" type="audio/mpeg" className="audio" controls>
              <track kind="captions" />
            </audio>
          </div>
        </div>
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
    return <div className="your-music-container">{this.renderData()}</div>
  }
}
export default YourMusic
