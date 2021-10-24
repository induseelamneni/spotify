import './index.css'

const yourMusicSongsItem = props => {
  const {songsList, selectedSong, isSongSelected} = props

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
        <img src={songsList.url} alt={songsList.songName} className="movie" />
      </div>
      <div className="song-name-container">
        <h1 className="song-name-heading">{songsList.songName}</h1>
        <p className="music-name">{songsList.music}</p>
      </div>
      <div className="time-container">
        <p className="time">{songsList.time}</p>
      </div>
    </li>
  )
}
export default yourMusicSongsItem
