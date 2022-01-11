import {Component} from 'react'
import './index.css'
import ReactAudioPlayer from 'react-audio-player'
import {BiArrowBack} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import OnClickEditorSongItem from '../OnClickEditorSongItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class OnClickEditors extends Component {
  state = {
    onClickEditor: '',
    fetchingDataStatus: apiStatusConstants.initial,
    selectedSongName: '',
    artistName: '',
    songUrl: '',
  }

  componentDidMount() {
    this.getPlayListSongsList()
  }

  getPlayListSongsList = async () => {
    this.setState({fetchingDataStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('pa_token')

    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    const apiUrl = `https://api.spotify.com/v1/users/spotify/playlists/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = {
        id: fetchedData.id,
        imageUrl: fetchedData.images[0].url,
        name: fetchedData.name,
        artistName: fetchedData.tracks.items[0].track.artists[0].name,
        addedTime: fetchedData.tracks.items.map(eachTrack => ({
          id: eachTrack.track.id,
          track: eachTrack.track.name,
          time: eachTrack.added_at,
          artist: eachTrack.track.artists.map(each => each.name)[0],
          songUrl: eachTrack.track.preview_url,
        })),
      }

      this.setState({
        onClickEditor: updatedData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  selectedSong = id => {
    const {onClickEditor} = this.state
    const filteredSong = onClickEditor.addedTime.filter(each => each.id === id)

    this.setState({
      selectSongId: id,
      selectedSongName: filteredSong.map(each => each.track)[0],
      artistName: filteredSong.map(each => each.artist)[0],
      songUrl: filteredSong.map(each => each.songUrl)[0],
    })
  }

  onClickHome = () => {
    const {history} = this.props

    return history.replace('/')
  }

  successView = () => {
    const {
      selectSongId,
      onClickEditor,
      selectedSongName,
      artistName,
      songUrl,
    } = this.state
    console.log(songUrl)

    return (
      <>
        <button type="button" className="back-btn" onClick={this.onClickHome}>
          <BiArrowBack />
          <p>Back</p>
        </button>

        <div className="pic-container-editors">
          <img
            src={onClickEditor.imageUrl}
            alt="name"
            className="editors-pic-img"
          />
          <div className="editor-pic-name-container">
            <p className="editors-picks-paragraph-hide-sm">Editors picks</p>
            <h1 className="song-name">{onClickEditor.name}</h1>
            <p className="editors-picks-paragraph">
              {onClickEditor.artistName}
            </p>
          </div>
        </div>
        <div className="track-heading-container">
          <p className="editors-picks-paragraph1">Track </p>
          <p className="editors-picks-paragraph1">Album </p>
          <p className="editors-picks-paragraph1">Time </p>
          <p className="editors-picks-paragraph1">Artist</p>
          <p className="editors-picks-paragraph1">Added</p>
        </div>
        <hr className="line" />
        <ul className="songs-list">
          {onClickEditor.addedTime.map((eachSong, index) => (
            <OnClickEditorSongItem
              key={eachSong.id}
              selectedSong={this.selectedSong}
              songsList={eachSong}
              serialNo={index + 1}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <ul className="songs-list-sm">
          {onClickEditor.addedTime.map(eachSong => (
            <OnClickEditorSongItem
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
                src={onClickEditor.imageUrl}
                alt="name"
                className="play-img"
              />
              <div className="e-d-p-c">
                <h1 className="editors-picks-paragraph-h">
                  {selectedSongName}
                </h1>
                <p className="artist">{artistName}</p>
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
    this.getPlayListSongsList()
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
    return <div className="on-click-editors-bg">{this.renderData()}</div>
  }
}

export default OnClickEditors
