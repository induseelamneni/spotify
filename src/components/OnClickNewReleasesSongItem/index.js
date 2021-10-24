import './index.css'

const OnClickNewReleasesSongItem = props => {
  const {songsList, selectedSong, isActive} = props
  console.log(songsList.popularity)

  const onClickSong = () => {
    selectedSong(songsList.id)
  }

  const changeSelectedSongClassName = isActive ? `select-song` : `unselect-song`

  return (
    <div>
      <li
        key={songsList.id}
        className={`track-heading-container1 ${changeSelectedSongClassName}`}
        onClick={onClickSong}
      >
        <p className="editors-picks-paragraph1">{songsList.id + 1}</p>
        <p className="editors-picks-paragraph1">{songsList.track}</p>

        <p className="editors-picks-paragraph1">{songsList.time}</p>

        <p className="editors-picks-paragraph1">{songsList.popularity}</p>
      </li>

      <li
        key={songsList.id}
        className={`track-heading-container-sm ${changeSelectedSongClassName}`}
        onClick={onClickSong}
      >
        <div className="song-name-onClick-sm-container">
          <p className="editors-picks-paragraph1">{songsList.track}</p>
          <p className="editors-picks-paragraph-sm">
            The Life of Ram Late Sri Tangutoori Surya Kumari
          </p>
        </div>
        <div>
          <p className="editors-picks-paragraph-p1">{songsList.time}</p>
        </div>
      </li>
    </div>
  )
}

export default OnClickNewReleasesSongItem
