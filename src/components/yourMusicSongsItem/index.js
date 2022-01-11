import './index.css'

const moment = require('moment')

const yourMusicSongsItem = props => {
  const {songsList, selectedSong, isSongSelected} = props

  const timeStamp = moment(new Date(songsList.time)).format('HH:MM')

  const onClickSong = () => {
    selectedSong(songsList.id)
  }

  const changeSelectedSongClassName = isSongSelected
    ? `select-song`
    : `unselect-song`

  return (
    <li
      onClick={onClickSong}
      className={`music-list ${changeSelectedSongClassName}`}
    >
      <div>
        <img
          src={songsList.imageUrl}
          alt={songsList.songName}
          className="movie"
        />
      </div>
      <div className="song-name-container">
        <h1 className="song-name-heading">{songsList.songName}</h1>
        <p className="music-name">{songsList.MovieName}</p>
      </div>

      <div className="time-container">
        <p className="time">{timeStamp}</p>
      </div>
    </li>
  )
}
export default yourMusicSongsItem
