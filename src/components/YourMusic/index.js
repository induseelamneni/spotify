import './index.css'

const YourMusicSongsList = [
  {
    id: 0,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275132/Rectangle_7_yjd1hw.png',
    songName: 'Karthik',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '2:04',
  },
  {
    id: 1,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275230/Rectangle_10_bw1g60.png',
    songName: 'Monna Kanipinchavu',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '5:08',
  },
  {
    id: 3,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275247/Rectangle_11_gzjaep.png',
    songName: 'Bewajah',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '4:45',
  },
  {
    id: 4,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275261/Rectangle_12_b4h1r1.png',
    songName: 'Undipo',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '3:45',
  },
  {
    id: 5,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275098/Rectangle_5_lt2pnj.png',
    songName: 'Karthik',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '2:04',
  },
  {
    id: 6,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275109/Rectangle_6_bl5xep.png',
    songName: 'Monna Kanipinchavu',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '5:08',
  },
  {
    id: 7,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631275132/Rectangle_7_yjd1hw.png',
    songName: 'Bewajah',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '4:45',
  },
  {
    id: 8,
    url:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1631282434/Rectangle_8_mutml6.png',
    songName: 'Undipo',
    music:
      'Afroz Ali  ·  Reddy Gari Ammai ( Telugu love song) Aishwarya reddy, CNU',
    time: '3:45',
  },
]

const YourMusic = () => (
  <div className="home-container">
    <h1 className="playlist-heading">Your Music</h1>
    <ul className="music-ul-container">
      {YourMusicSongsList.map(item => (
        <li key={item.id} className="music-list">
          <div>
            <img src={item.url} alt={item.songName} className="movie" />
          </div>
          <div className="song-name-container">
            <h1 className="song-name">{item.songName}</h1>
            <p className="music-name">{item.music}</p>
          </div>
          <div className="time-container">
            <p className="time">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className="bottom-container">
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1628511056/Rectangle_480_ttg4mr.png"
          alt="song-play"
          className="play-img"
        />
      </div>
      <div>
        <h1 className="song-name">Avunanna</h1>
        <p className="music-name">Naresh Iyer, Swetha</p>
      </div>
      <div className="music-play-img">
        <audio src="Bell.mp3" type="audio/mpeg" className="audio" controls>
          <track kind="captions" />
        </audio>
      </div>
    </div>
  </div>
)
export default YourMusic
