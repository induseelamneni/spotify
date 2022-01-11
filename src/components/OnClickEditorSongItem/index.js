import './index.css'

const moment = require('moment')

const OnClickEditorSongItem = props => {
  const {songsList, isActive, selectedSong, serialNo} = props
  console.log(serialNo)

  const timeStamp = moment(new Date(songsList.time)).format('HH:MM')
  const date = moment(new Date(songsList.time)).format('DD')

  const presentDate = new Date().getDate()
  let addedDate = presentDate - date

  if (addedDate < 0) {
    addedDate *= -1
  }

  const onClickSong = () => {
    selectedSong(songsList.id)
  }

  const changeSelectedSongClassName = isActive ? `select-song` : `unselect-song`

  return (
    <div>
      <li
        onClick={onClickSong}
        key={songsList.id}
        className={`track-heading-container-sm ${changeSelectedSongClassName}`}
      >
        <div className="song-name-onClick-sm-container">
          <p className="editors-picks-paragraph1">{songsList.track}</p>
          <p className="editors-picks-paragraph-sm">{songsList.artist}</p>
        </div>
        <div>
          <p className="editors-picks-paragraph-sm">{timeStamp}</p>
        </div>
      </li>

      <li
        key={songsList.no}
        className={`track-heading-container1 ${changeSelectedSongClassName}`}
        onClick={onClickSong}
      >
        <p className="editors-picks-paragraph1">{songsList.track}</p>
        <p className="editors-picks-paragraph1">{songsList.track}</p>
        <p className="editors-picks-paragraph1 time">{timeStamp}</p>
        <p className="editors-picks-paragraph1">{songsList.artist}</p>
        <p className="editors-picks-paragraph1">{addedDate} days ago</p>
      </li>
    </div>
  )
}

export default OnClickEditorSongItem
