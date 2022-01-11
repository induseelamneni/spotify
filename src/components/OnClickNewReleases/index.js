import {Component} from 'react'
import './index.css'
import ReactAudioPlayer from 'react-audio-player'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiArrowBack} from 'react-icons/bi'
import OnClickNewReleasesSongItem from '../OnClickNewReleasesSongItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class OnNewReleases extends Component {
  state = {
    selectSongId: '',
    fetchingDataStatus: apiStatusConstants.initial,
    newReleasesSongsList: [],
    songName: '',
    songUrl: '',
  }

  componentDidMount() {
    this.getNewReleasesSongs()
  }

  getNewReleasesSongs = async () => {
    this.setState({fetchingDataStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('pa_token')

    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    const apiUrl = `https://api.spotify.com/v1/albums/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.id,
        imageUrl: fetchedData.images[0].url,
        name: fetchedData.name,
        artistName: fetchedData.artists[0].name,
        popularity: fetchedData.popularity,
        releaseDate: fetchedData.release_date,
        songs: fetchedData.tracks.items.map(eachTrack => ({
          id: eachTrack.id,
          track: eachTrack.name,
          songUrl: eachTrack.preview_url,
        })),
      }
      console.log(updatedData)

      this.setState({
        newReleasesSongsList: updatedData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  selectedSong = id => {
    const {newReleasesSongsList} = this.state

    const filteredSong = newReleasesSongsList.songs.filter(
      each => each.id === id,
    )

    this.setState({
      selectSongId: id,
      songName: filteredSong[0].track,
      songUrl: filteredSong[0].songUrl,
    })
  }

  onClickHome = () => {
    const {history} = this.props

    return history.replace('/')
  }

  successView = () => {
    const {newReleasesSongsList, selectSongId, songName, songUrl} = this.state
    console.log(songUrl)
    return (
      <>
        <button type="button" className="back-btn" onClick={this.onClickHome}>
          <BiArrowBack />
          <p>Back</p>
        </button>
        <div className="pic-container">
          <img
            src={newReleasesSongsList.imageUrl}
            alt="new"
            className="editors-pic-img"
          />
          <div className="editor-pic-name-container">
            <p className="editors-picks-paragraph-sm">New Releases</p>
            <h1 className="song-name">{newReleasesSongsList.name}</h1>
            <p className="editors-picks-paragraph">
              {newReleasesSongsList.artistName}
            </p>
          </div>
        </div>
        <div className="track-heading-container">
          <p className="editors-picks-paragraph1">Track </p>

          <p className="editors-picks-paragraph1">Date </p>

          <p className="editors-picks-paragraph1">Popularity</p>
        </div>
        <hr className="line" />
        <ul className="songs-list">
          {newReleasesSongsList.songs.map(eachSong => (
            <OnClickNewReleasesSongItem
              key={eachSong.id}
              selectedSong={this.selectedSong}
              songsList={eachSong}
              popularity={newReleasesSongsList.popularity}
              releaseDate={newReleasesSongsList.releaseDate}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <ul className="songs-list-sm">
          {newReleasesSongsList.songs.map(eachSong => (
            <OnClickNewReleasesSongItem
              key={eachSong.id}
              selectedSong={this.selectedSong}
              songsList={eachSong}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <div className="bottom-play-container">
          <div className="bottom-img-song-container">
            <div className="audio-container1">
              <img
                src={newReleasesSongsList.imageUrl}
                alt="new"
                className="play-img"
              />
              <div className="e-d-p-c">
                <h1 className="editors-picks-paragraph-h">{songName}</h1>
                <p className="artist">{newReleasesSongsList.artistName}</p>
              </div>
            </div>
            <div className="audio-container">
              <ReactAudioPlayer src={songUrl} autoPlay controls />
            </div>
          </div>
        </div>
      </>
    )
  }

  onClickRetryJobDetails = () => {
    this.getNewReleasesSongs()
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
    return <div className="on-new-releases-bg">{this.renderData()}</div>
  }
}
export default OnNewReleases
