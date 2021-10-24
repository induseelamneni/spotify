import './index.css'

const OnClickEditorSongItem = props => {
  const {songsList, isActive, selectedSong} = props

  const onClickSong = () => {
    selectedSong(songsList.id)
  }

  const changeSelectedSongClassName = isActive ? `select-song` : `unselect-song`
  console.log(changeSelectedSongClassName)

  return (
    <div>
      <li
        onClick={onClickSong}
        key={songsList.id}
        className={`track-heading-container-sm ${changeSelectedSongClassName}`}
      >
        <div className="song-name-onClick-sm-container">
          <p className="editors-picks-paragraph1">{songsList.track}</p>
          <p className="editors-picks-paragraph-sm">
            The Life of Ram Late Sri Tangutoori Surya Kumari
          </p>
        </div>
        <div>
          <p className="editors-picks-paragraph-sm">{songsList.time}</p>
        </div>
      </li>

      <li
        key={songsList.no}
        className={`track-heading-container1 ${changeSelectedSongClassName}`}
        onClick={onClickSong}
      >
        <p className="editors-picks-paragraph11">{songsList.id + 1}</p>
        <p className="editors-picks-paragraph1">{songsList.track}</p>
        <p className="editors-picks-paragraph1">{songsList.album}</p>
        <p className="editors-picks-paragraph1">{songsList.time}</p>
        <p className="editors-picks-paragraph1">{songsList.artist}</p>
        <p className="editors-picks-paragraph1">{songsList.added}</p>
      </li>
    </div>
  )
}

export default OnClickEditorSongItem
