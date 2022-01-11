import './index.css'

const moment = require('moment')

const OnClickPodcastAndPlayListSongItem = props => {
  const {songsList, selectedSong, isActive} = props

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
        key={songsList.id}
        className={`track-heading-container1 ${changeSelectedSongClassName}`}
        onClick={onClickSong}
      >
        <p className="editors-picks-paragraph1">{songsList.track}</p>
        <p className="editors-picks-paragraph1">{songsList.track}</p>
        <p className="editors-picks-paragraph1">{timeStamp}</p>
        <p className="editors-picks-paragraph1">{songsList.artist}</p>
        <p className="editors-picks-paragraph1">{addedDate} days ago</p>
      </li>

      <li
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
          <p className="editors-picks-paragraph-sm">{timeStamp}</p>
        </div>
      </li>
    </div>
  )
}

export default OnClickPodcastAndPlayListSongItem
