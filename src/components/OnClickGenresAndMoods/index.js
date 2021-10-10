import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import {Link} from 'react-router-dom'

import './index.css'

const podCastPicList = [
  {
    id: 0,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779448/Rectangle_458_2_c4py2b.png',
    name: ' Purijaganth',
    tracks: '30 Tracks',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779409/Rectangle_459_5_irpiia.png',
    name: ' Office Ladies',
    tracks: '45 Tracks',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779017/ranveer_1_yazdpu.png',
    name: 'Ranveer',
    tracks: '20 Tracks',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779180/Rectangle_459_1_m8o9ma.png',
    name: ' Joe Budden',
    tracks: '20 Tracks',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779210/Rectangle_459_2_ri0oh5.png',
    name: 'Call her daddy',
    tracks: '100 Tracks',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779241/Rectangle_459_3_zpuqx6.png',
    name: 'Son of a Hitman',
    tracks: '60 Tracks',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779270/Rectangle_458_1_ampnjs.png',
    name: 'On Purpose',
    tracks: '30 Tracks',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779289/Rectangle_465_1_bfegnx.png',
    name: 'Office Ladies',
    tracks: '45 Tracks',
  },
  {
    id: 8,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633779340/Rectangle_459_4_zowhfp.png',
    name: 'Finshots',
    tracks: '60 Tracks',
  },
]

class OnClickGenresAndMoods extends Component {
  onClickHomeInGenre = () => {
    const {history} = this.props

    return history.replace('/')
  }

  render() {
    return (
      <div className="on-click-genres-bg">
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
            {podCastPicList.map(eachPic => (
              <li key={eachPic.id} className="onClick-genre-sm">
                <Link to="/playList">
                  <img
                    src={eachPic.imgUrl}
                    alt={eachPic.name}
                    className="podcast-pic"
                  />
                </Link>
                <div>
                  <h1 className="director-name">{eachPic.name}</h1>
                  <p className="no-of-tracks">{eachPic.tracks}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default OnClickGenresAndMoods
