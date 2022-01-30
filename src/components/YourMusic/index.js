import './index.css'
import ReactAudioPlayer from 'react-audio-player'
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
    songUrl: '',
    imageUrl: '',
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
      console.log(fetchedData)
      const musicData = fetchedData

      const updatedMusicData = musicData.items.map(each => ({
        time: each.added_at,
        id: each.track.id,
        songUrl: each.track.preview_url,
        imageUrl: each.track.album.images[0].url,
        songName: each.track.name,
        artistName: each.track.album.artists[0].name,
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
    console.log(music)
    const filteredSong = music.filter(each => each.id === id)
    console.log(filteredSong)

    this.setState({
      selectedSongName: filteredSong[0].songName,
      songUrl: filteredSong[0].songUrl,
      artistName: filteredSong[0].artistName,
      imageUrl: filteredSong[0].imageUrl,
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
    const {
      selectedSongName,
      selectSongId,
      music,
      songUrl,
      artistName,
      imageUrl,
    } = this.state

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
        <div className="bottom-play-container">
          <div className="bottom-img-song-container">
            <div className="audio-container1">
              <img src={imageUrl} alt="song-play" className="play-img" />
              <div className="e-d-p-c">
                <h1 className="editors-picks-paragraph-h">
                  {selectedSongName}
                </h1>
                <p className="artist">{artistName}</p>
              </div>
            </div>

            <div className="audio-container">
              <ReactAudioPlayer
                src={songUrl}
                autoPlay
                controls
                className="audio-control"
              />
            </div>
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
