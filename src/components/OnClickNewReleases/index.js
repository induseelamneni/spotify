import {Component} from 'react'
import './index.css'
import {BiArrowBack} from 'react-icons/bi'
import OnClickNewReleasesSongItem from '../OnClickNewReleasesSongItem'

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
]

const songsList = [
  {
    id: 0,
    track: 'Tholiprema',

    time: '02:55',

    popularity: '6',
  },
  {
    id: 1,
    track: 'Yean',

    time: '02:55',

    popularity: '5',
  },
  {
    id: 2,
    track: 'Vasanthna  kaalangal',

    time: '02:55',

    popularity: '4',
  },
  {
    id: 3,
    track: 'Love u chinna',

    time: '02:55',

    popularity: '8',
  },
  {
    id: 4,
    track: 'Neeve Neeve',

    time: '02:55',

    popularity: '4',
  },
  {
    id: 5,
    track: 'Hoyna Hoyna ',

    time: '02:55',

    popularity: '7',
  },
  {
    id: 6,
    track: 'Bujji Bangarm',

    time: '02:55',

    popularity: '9',
  },
  {
    id: 7,
    track: 'Kaathalae kaathalae - Version 2',

    time: '02:55',

    popularity: '10',
  },
]

class OnNewReleases extends Component {
  state = {
    selectedSongName: songsList[0],
    selectSongId: songsList[0].id,
  }

  selectedSong = id => {
    this.setState({
      selectedSongName: songsList[id],
      selectSongId: songsList[id].id,
    })
  }

  onClickHome = () => {
    const {history} = this.props

    return history.replace('/')
  }

  render() {
    const {selectedSongName, selectSongId} = this.state

    return (
      <div className="on-new-releases-bg">
        <button type="button" className="back-btn" onClick={this.onClickHome}>
          <BiArrowBack />
          <p>Back</p>
        </button>
        <div className="pic-container">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593380/Rectangle_545_gnnb9o.png"
            alt="new"
            className="editors-pic-img"
          />
          <div className="editor-pic-name-container">
            <p className="editors-picks-paragraph-sm">New Releases</p>
            <h1 className="song-name">new</h1>
            <p className="editors-picks-paragraph">Album by Rahul Raj,2011</p>
          </div>
        </div>
        <div className="track-heading-container">
          <p className="editors-picks-paragraph1 editors-picks-paragraph16">
            #
          </p>
          <p className="editors-picks-paragraph1">Track </p>

          <p className="editors-picks-paragraph1">Time </p>

          <p className="editors-picks-paragraph1">Popularity</p>
        </div>
        <hr className="line" />
        <ul className="songs-list">
          {songsList.map(eachSong => (
            <OnClickNewReleasesSongItem
              key={eachSong.id}
              selectedSong={this.selectedSong}
              songsList={eachSong}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <ul className="songs-list-sm">
          {songsList.map(eachSong => (
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
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1628593380/Rectangle_545_gnnb9o.png"
                alt="new"
                className="play-img"
              />
              <div className="e-d-p-c">
                <h1 className="editors-picks-paragraph-h">new</h1>
                <p className="artist">{selectedSongName.track}</p>
              </div>
            </div>
            <div className="audio-container">
              <audio src="Bell.mp3" type="audio/mpeg" controls>
                <track kind="captions" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default OnNewReleases
