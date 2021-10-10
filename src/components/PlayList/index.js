import './index.css'
import {Link} from 'react-router-dom'

const id = 'playList'

const PlayList = () => (
  <div className="play-list-container">
    <h1 className="playlist-heading">Your Playlists</h1>
    <div className="music-container">
      <Link to={`${id}`}>
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

          <h1 className="my-fav-heading">My fav </h1>
          <p className="track-para">30 Tracks</p>
        </div>
      </Link>
      <div className="playlist-2-container">
        <div className="music-symbol-container">
          <Link to={`${id}`}>
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1633587966/music-note-beamed_ri1aky.png"
              alt="music"
              className="music-symbol"
            />
          </Link>
        </div>
        <p className="my-fav-heading"># Playlist 2</p>
        <p className="track-para">30 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <Link to={`${id}`}>
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171324/Rectangle_464_bpvsw9.png"
            alt="music"
            className="pic1"
          />
        </Link>
        <p className="my-fav-heading"># Playlist 3</p>
        <p className="track-para">10 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <div className="music-symbol-container">
          <Link to={`${id}`}>
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1633587966/music-note-beamed_ri1aky.png"
              alt="music"
              className="music-symbol"
            />
          </Link>
        </div>
        <p className="my-fav-heading"># Playlist 4</p>
        <p className="track-para">30 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <div className="music-symbol-container">
          <Link to={`${id}`}>
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1633587966/music-note-beamed_ri1aky.png"
              alt="music"
              className="music-symbol"
            />
          </Link>
        </div>
        <p className="my-fav-heading"># Playlist 5</p>
        <p className="track-para">30 Tracks</p>
      </div>
    </div>
  </div>
)
export default PlayList
