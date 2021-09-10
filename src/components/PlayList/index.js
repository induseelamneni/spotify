import './index.css'

const PlayList = () => (
  <div className="home-container">
    <h1 className="playlist-heading">Your Playlists</h1>
    <div className="music-container">
      <div>
        <div className="movie-pic-container">
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
        <div className="movie-pic-container">
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
        <p className="my-fav-heading">My fav </p>
        <p className="track-para">30 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <div className="music-symbol-container">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1628664912/music-symbol_jk9jrg.jpg"
            alt="music"
            className="music-symbol"
          />
        </div>
        <p className="my-fav-heading"># Playlist 2</p>
        <p className="track-para">30 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171324/Rectangle_464_bpvsw9.png"
          alt="music"
          className="pic1"
        />

        <p className="my-fav-heading"># Playlist 3</p>
        <p className="track-para">10 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <div className="music-symbol-container">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1628664912/music-symbol_jk9jrg.jpg"
            alt="music"
            className="music-symbol"
          />
        </div>
        <p className="my-fav-heading"># Playlist 4</p>
        <p className="track-para">30 Tracks</p>
      </div>
      <div className="playlist-2-container">
        <div className="music-symbol-container">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1628664912/music-symbol_jk9jrg.jpg"
            alt="music"
            className="music-symbol"
          />
        </div>
        <p className="my-fav-heading"># Playlist 5</p>
        <p className="track-para">30 Tracks</p>
      </div>
    </div>
  </div>
)
export default PlayList
