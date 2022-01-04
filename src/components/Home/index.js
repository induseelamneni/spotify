import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

const moment = require('moment')

moment().format()

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    playListTitle: '',
    playList: '',
    genresAndMoods: '',
    newReleases: '',
    fetchingDataStatus: apiStatusConstants.initial,
  }

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
    console.log(userData.country)

    const usercountry = userData.country

    const timestamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')

    const apiUrl = `https://api.spotify.com/v1/browse/featured-playlists?country=${usercountry}&timestamp=${timestamp}`
    const apiUrlCategoryGenresAndMoods = `https://api.spotify.com/v1/browse/categories`
    const apiUrlNewReleases = `https://api.spotify.com/v1/browse/new-releases?country=${usercountry}`

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const responseForGenre = await fetch(apiUrlCategoryGenresAndMoods, options)
    const responseForNewReleases = await fetch(apiUrlNewReleases, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const msg = fetchedData.message

      const data = fetchedData.playlists.items

      const updatedData = data.map(each => ({
        id: each.id,
        url: each.images
          .map(imgUrl => imgUrl.url)
          .map(eachImg => ({
            imgUrl: eachImg,
          })),
        name: each.name,
      }))

      const fetchedDataForGenre = await responseForGenre.json()

      const genreAndMoodsData = fetchedDataForGenre.categories.items

      const categoryUpdatedData = genreAndMoodsData.map(each => ({
        id: each.id,
        iconUrl: each.icons
          .map(eachI => eachI.url)
          .map(icon => ({
            iconUrl: icon,
          })),
        name: each.name,
      }))

      const fetchedDataForNewReleases = await responseForNewReleases.json()

      const dataForNewReleases = fetchedDataForNewReleases.albums.items

      const updatedDataForNewRelease = dataForNewReleases.map(each => ({
        id: each.id,
        url: each.images
          .map(imgUrl => imgUrl.url)
          .map(eachImg => ({
            imgUrl: eachImg,
          })),
        name: each.name,
      }))

      this.setState({
        playListTitle: msg,
        playList: updatedData,
        genresAndMoods: categoryUpdatedData,
        newReleases: updatedDataForNewRelease,
        fetchingDataStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        fetchingDataStatus: apiStatusConstants.failure,
      })
    }
  }

  successView = () => {
    const {playList, playListTitle, genresAndMoods, newReleases} = this.state

    return (
      <>
        <h1 className="editors-heading">{playListTitle}</h1>
        <ul className="editors-pics-ul-container">
          {playList.map(item => (
            <li className="list-item" key={item.id} id={item.id}>
              <Link to={`editors/${item.id}`}>
                <img
                  src={item.url[0].imgUrl}
                  alt="imageurl"
                  className="image-style"
                />
              </Link>
              <p className="pic-name">{item.name}</p>
            </li>
          ))}
        </ul>
        <h1 className="editors-heading">Genres & Moods</h1>
        <ul className="editors-pics-ul-container">
          {genresAndMoods.map(item => (
            <li className="list-item1" key={item.id}>
              <Link
                to={`genre/${item.id}`}
                style={{padding: 10, textDecoration: 'none'}}
              >
                <div className="background13">
                  <p className="type">{item.name}</p>
                  <img
                    src={item.iconUrl[0].iconUrl}
                    alt="genere"
                    className="image-style1"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <h1 className="editors-heading">New releases</h1>
        <ul className="editors-pics-ul-container">
          {newReleases.map(item => (
            <li className="list-item" key={item.id}>
              <Link to={`newReleases/${item.id}`}>
                <img
                  src={item.url[1].imgUrl}
                  alt={item.name}
                  className="image-style"
                />
              </Link>
              <p className="pic-name">{item.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
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
      <p className="retry-heading">
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
    return <div className="home-container">{this.renderData()}</div>
  }
}

export default Home

/* const editorsPicsList = [
  {
    id: 0,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628511056/Rectangle_480_ttg4mr.png',
    name: 'Telugu Romance',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519108/Rectangle_481_tm9ggk.png',
    name: 'Bollywood R&B',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519111/Rectangle_482_glterz.png',
    name: 'Marati Hits',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519155/Rectangle_483_ah5vjp.png',
    name: 'Sufi & Bollywood',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519170/Rectangle_484_ykslai.png',
    name: 'Romantic Tamizha',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519182/Rectangle_538_mwr7o1.png',
    name: 'Ardha Sathabdham',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528726/Rectangle_485_l2eabk.png',
    name: 'Bahubali',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528738/Rectangle_486_luks88.png',
    name: 'Dhruva',
  },
  {
    id: 8,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528788/Rectangle_487_ibugil.png',
    name: 'Arjun Reddy',
  },
  {
    id: 9,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528799/Rectangle_488_wymne8.png',
    name: 'Awe',
  },
  {
    id: 10,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528837/Rectangle_489_ocr58u.png',
    name: 'Oopiri',
  },
  {
    id: 11,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528850/Rectangle_541_le1txd.png',
    name: 'Nuve kavalli',
  },
]

const GenresAndMoods = [
  {
    id: 0,
    type: 'Podcasts',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628578498/cuarteto_ibai_g6borj.png',

    styling: 'background1',
  },
  {
    id: 1,
    type: 'Hollywood',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628578519/cuarteto_ibai_1_yvkmil.png',

    styling: 'background2',
  },
  {
    id: 2,
    type: 'Pop',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587284/cuarteto_ibai_5_iuu0b8.png',

    styling: 'background3',
  },
  {
    id: 3,
    type: 'Tamil',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587349/cuarteto_ibai_3_yupfs8.png',

    styling: 'background4',
  },
  {
    id: 4,
    type: 'Telugu',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587318/cuarteto_ibai_4_civn2j.png',

    styling: 'background5',
  },
  {
    id: 5,
    type: 'Kanada',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587284/cuarteto_ibai_5_iuu0b8.png',

    styling: 'background6',
  },
  {
    id: 6,
    type: 'Love',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628589215/cuarteto_ibai_6_xkkrle.png',

    styling: 'background7',
  },
  {
    id: 7,
    type: 'Romantic',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628589203/cuarteto_ibai_7_ubydza.png',

    styling: 'background8',
  },
  {
    id: 8,
    type: 'Bollywood',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628589188/cuarteto_ibai_8_e9nnt2.png',

    styling: 'background9',
  },
  {
    id: 9,
    type: 'K-Pop',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628578498/cuarteto_ibai_g6borj.png',

    styling: 'background10',
  },
  {
    id: 10,
    type: 'Party',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628578519/cuarteto_ibai_1_yvkmil.png',

    styling: 'background11',
  },
  {
    id: 11,
    type: 'Tollywood',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628578498/cuarteto_ibai_g6borj.png',

    styling: 'background12',
  },
  {
    id: 12,
    type: 'Hip Hop',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587284/cuarteto_ibai_5_iuu0b8.png',

    styling: 'background13',
  },
  {
    id: 13,
    type: 'Rock',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587349/cuarteto_ibai_3_yupfs8.png',

    styling: 'background14',
  },
  {
    id: 14,
    type: 'Classic',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628587318/cuarteto_ibai_4_civn2j.png',

    styling: 'background15',
  },
  {
    id: 15,
    type: 'Relax',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628589203/cuarteto_ibai_7_ubydza.png',

    styling: 'background16',
  },
  {
    id: 16,
    type: 'Focus',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628589215/cuarteto_ibai_6_xkkrle.png',

    styling: 'background17',
  },
  {
    id: 17,
    type: 'Kollywood',
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628589203/cuarteto_ibai_7_ubydza.png',

    styling: 'background18',
  },
] 

const NewReleases = [
  {
    id: 0,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628590076/Rectangle_510_p1egjd.png',
    name: 'Tholi prema ',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593181/Rectangle_513_yfpf2b.png',
    name: 'Last Night IN',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593261/Rectangle_516_xk6baz.png',
    name: 'Shadow',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593270/Rectangle_519_tm9btz.png',
    name: 'MCA',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593287/Rectangle_522_makcal.png',
    name: 'I',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593372/Rectangle_544_vinfky.png',
    name: 'Ardha Sathabdham',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593219/Rectangle_511_fcfgvp.png',
    name: 'Bahubali',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593240/Rectangle_514_ka52ub.png',
    name: 'Dhruva',
  },
  {
    id: 8,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593301/Rectangle_531_njrzwc.png',
    name: 'Arjun Reddy',
  },
  {
    id: 9,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593380/Rectangle_545_gnnb9o.png',
    name: 'Nuve kavalli',
  },
  {
    id: 10,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593292/Rectangle_523_tejxrz.png',
    name: 'Oopiri',
  },
  {
    id: 11,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593318/Rectangle_534_ezp6r0.png',
    name: 'Hello',
  },
  {
    id: 12,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593231/Rectangle_512_v6levj.png',
    name: 'Attarintiki Daredi',
  },
  {
    id: 13,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593253/Rectangle_515_ainlc1.png',
    name: 'Eega',
  },
  {
    id: 14,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593310/Rectangle_533_q4m7tt.png',
    name: 'Ghazi',
  },
  {
    id: 15,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593330/Rectangle_536_osyinl.png',
    name: 'Jersey',
  },
  {
    id: 16,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593339/Rectangle_537_fbc4nf.png',
    name: 'Check',
  },
  {
    id: 17,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593380/Rectangle_545_gnnb9o.png',
    name: 'Ninnila Ninnila',
  },
] */
