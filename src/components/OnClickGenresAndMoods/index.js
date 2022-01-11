import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class OnClickGenresAndMoods extends Component {
  state = {
    fetchingDataStatus: apiStatusConstants.initial,
    genreAndMoodsAlbumsList: [],
  }

  componentDidMount() {
    this.getGenreAndMoodsSongsList()
  }

  getGenreAndMoodsSongsList = async () => {
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
    console.log(userData.country)

    const usercountry = userData.country

    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    const apiUrl = `https://api.spotify.com/v1/browse/categories/${id}/playlists?country=${usercountry}`
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

      const updatedData = fetchedData.playlists.items.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.images[0].url,
        tracksCount: each.tracks.total,
      }))
      console.log(updatedData)

      this.setState({
        genreAndMoodsAlbumsList: updatedData,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingDataStatus: apiStatusConstants.failure})
    }
  }

  onClickHomeInGenre = () => {
    const {history} = this.props

    return history.replace('/')
  }

  successView = () => {
    const {genreAndMoodsAlbumsList} = this.state

    return (
      <>
        <button
          type="button"
          className="back-btn"
          onClick={this.onClickHomeInGenre}
        >
          <BiArrowBack />
          <p>Back</p>
        </button>
        <div className="pic-container">
          <ul className="podcast-ul-list-type">
            {genreAndMoodsAlbumsList.map(eachPic => (
              <li key={eachPic.id} className="onClick-genre-sm">
                <Link to={`/playList/${eachPic.id}`}>
                  <img
                    src={eachPic.imageUrl}
                    alt={eachPic.name}
                    className="podcast-pic"
                  />
                </Link>
                <div className="name-container">
                  <h1 className="director-name">{eachPic.name}</h1>
                  <p className="no-of-tracks">{eachPic.tracksCount} Tracks</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  onClickRetryJobDetails = () => {
    this.getGenreAndMoodsSongsList()
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
    return <div className="on-click-genres-bg">{this.renderData()}</div>
  }
}

export default OnClickGenresAndMoods
