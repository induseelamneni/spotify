const yourMusicSongsItem = props => {
  const {songsList, selectedSong} = props

  const onClickSong = () => {
    selectedSong(songsList.id)
  }

  return (
    <li className="music-list" onClick={onClickSong}>
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
