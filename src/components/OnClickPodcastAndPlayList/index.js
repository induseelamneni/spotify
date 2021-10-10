import {Component} from 'react'
import './index.css'
import {BiArrowBack} from 'react-icons/bi'

const songsList = [
  {
    no: 1,
    track: 'The Life of  Ram ',
    album: '96',
    time: '02:55',
    artist: 'Kala Bhairava',
    added: '2 Months ago',
  },
  {
    no: 2,
    track: 'Neetho unte',
    album: 'Josh',
    time: '02:55',
    artist: 'Sooranna',
    added: '5 days  ago',
  },
  {
    no: 3,
    track: 'Seetha andhallu ',
    album: 'Subbasankalpam',
    time: '02:55',
    artist: 'Subbasankalpam',
    added: '2 years ago',
  },
  {
    no: 4,
    track: 'Love u chinna',
    album: 'Love mocktail',
    time: '02:55',
    artist: 'Love mocktail',
    added: '2 Months ago',
  },
  {
    no: 5,
    track: 'Neeve Neeve',
    album: 'Amma nanna oka thamil ammayi ',
    time: '02:55',
    artist: 'G. V. Prakash',
    added: '1 Months ago',
  },
  {
    no: 6,
    track: 'Hoyna Hoyna ',
    album: 'Kaathalae kaathalae - Version 1',
    time: '02:55',
    artist: 'Daler Mehndi',
    added: '6 Months ago',
  },
  {
    no: 7,
    track: 'Bujji Bangarm',
    album: 'Guna369',
    time: '02:55',
    artist: 'Sarath Santosh',
    added: '8 days ago',
  },
  {
    no: 8,
    track: 'Kaathalae kaathalae - Version 2',
    album: 'Tholiprema ',
    time: '02:55',
    artist: 'Nakash Aziz',
    added: '2 Months ago',
  },
]

class OnClickPodcastAndPlayList extends Component {
  onClickHome = () => {
    const {history} = this.props
    console.log(history)

    return history.replace('/')
  }

  render() {
    return (
      <div className="onClickEditorsBg">
        <button type="button" className="back-btn" onClick={this.onClickHome}>
          <BiArrowBack />
          <p>Back</p>
        </button>

        <div className="pic-container-play-list">
          <div>
            <div className="movie-pic-container1">
              <img
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171176/Rectangle_462_xmavsf.png"
                alt="movie1"
                className="pic"
              />
              <img
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171160/Rectangle_463_c4meao.png"
                alt="movie2"
                className="pic"
              />
            </div>
            <div className="movie-pic-container1">
              <img
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171324/Rectangle_464_bpvsw9.png"
                alt="movie3"
                className="pic"
              />
              <img
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171337/Rectangle_465_ob0syz.png"
                alt="movie4"
                className="pic"
              />
            </div>
          </div>
          <div className="play-list-pic-description">
            <p className="my-fav-heading-on">#playlist</p>
            <p className="my-fav-heading-sm">My fav </p>
            <p className="track-para">30 Tracks</p>
            <p className="singer-lg">Mickey J. Meyer</p>
          </div>
        </div>

        <div className="track-heading-container">
          <p className="editors-picks-paragraph12">Track </p>
          <p className="editors-picks-paragraph1">Track </p>
          <p className="editors-picks-paragraph1">Album </p>
          <p className="editors-picks-paragraph1">Time </p>
          <p className="editors-picks-paragraph1">Artist</p>
          <p className="editors-picks-paragraph1">Added</p>
        </div>
        <hr className="line" />
        <ul className="songs-list">
          {songsList.map(eachSong => (
            <li key={eachSong.no} className="track-heading-container1">
              <p className="editors-picks-paragraph11">{eachSong.no}</p>
              <p className="editors-picks-paragraph1">{eachSong.track}</p>
              <p className="editors-picks-paragraph1">{eachSong.album}</p>
              <p className="editors-picks-paragraph1">{eachSong.time}</p>
              <p className="editors-picks-paragraph1">{eachSong.artist}</p>
              <p className="editors-picks-paragraph1">{eachSong.added}</p>
            </li>
          ))}
        </ul>

        <ul className="songs-list-sm">
          {songsList.map(eachSong => (
            <li key={eachSong.no} className="track-heading-container-sm">
              <div className="song-name-onClick-sm-container">
                <p className="editors-picks-paragraph1">{eachSong.track}</p>
                <p className="editors-picks-paragraph-sm">
                  The Life of Ram Late Sri Tangutoori Surya Kumari
                </p>
              </div>
              <div>
                <p className="editors-picks-paragraph-sm">{eachSong.time}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="bottom-play-container">
          <div className="bottom-img-song-container">
            <div className="audio-container1">
              <img
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1633865877/Rectangle_470_qd7f82.png"
                alt="leader"
                className="play-img"
              />
              <div className="e-d-p-c">
                <h1 className="editors-picks-paragraph-h">Avunanna</h1>
                <p className="artist">Naresh Iyer, Swetha</p>
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
export default OnClickPodcastAndPlayList
