import {Component} from 'react'
import './index.css'
import ReactAudioPlayer from 'react-audio-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiArrowBack} from 'react-icons/bi'
import OnClickPodcastAndPlayListSongItem from '../OnClickPodcastAndPlayListSongItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class OnClickPodcastAndPlayList extends Component {
  state = {
    fetchingDataStatus: apiStatusConstants.initial,
    podCastSongsList: [],
    selectedSongName: '',
    selectSongId: '',
    songUrl: '',
    artistName: '',
  }

  componentDidMount() {
    this.getPodcastAndPlayList()
  }

  getPodcastAndPlayList = async () => {
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
        total: fetchedData.tracks.total,
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
        podCastSongsList: updatedData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  selectedSong = id => {
    const {podCastSongsList} = this.state
    const filteredSong = podCastSongsList.addedTime.filter(
      each => each.id === id,
    )

    this.setState({
      selectSongId: id,
      selectedSongName: filteredSong.map(each => each.track)[0],
      artistName: filteredSong.map(each => each.artist)[0],
      songUrl: filteredSong.map(each => each.songUrl)[0],
    })
  }

  onClickHome = () => {
    const {history} = this.props
    console.log(history)

    return history.replace('/')
  }

  successView = () => {
    console.log('in')
    const {
      selectedSongName,
      selectSongId,
      podCastSongsList,
      artistName,
      songUrl,
    } = this.state
    console.log(podCastSongsList)
    return (
      <>
        <button type="button" className="back-btn" onClick={this.onClickHome}>
          <BiArrowBack />
          <p>Back</p>
        </button>

        <div className="pic-container-play-list">
          <div>
            <div className="movie-pic-container1">
              <img
                src={podCastSongsList.imageUrl}
                alt="movie1"
                className="podcast-pic"
              />
            </div>
          </div>
          <div className="play-list-pic-description">
            <p className="my-fav-heading-on">#playlist</p>
            <p className="my-fav-heading-sm">{podCastSongsList.name} </p>
            <p className="editors-picks-paragraph">
              {podCastSongsList.total} Tracks
            </p>
            <p className="singer-lg">Mickey J. Meyer</p>
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
          {podCastSongsList.addedTime.map(eachSong => (
            <OnClickPodcastAndPlayListSongItem
              key={eachSong.id}
              songsList={eachSong}
              selectedSong={this.selectedSong}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <ul className="songs-list-sm">
          {podCastSongsList.addedTime.map(eachSong => (
            <OnClickPodcastAndPlayListSongItem
              key={eachSong.id}
              songsList={eachSong}
              selectedSong={this.selectedSong}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <div className="bottom-play-container">
          <div className="bottom-img-song-container">
            <div className="audio-container1">
              <img
                src={podCastSongsList.imageUrl}
                alt="leader"
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

  onClickRetryJobDetails = () => {
    this.getPodcastAndPlayList()
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
export default OnClickPodcastAndPlayList
