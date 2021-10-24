import {Component} from 'react'
import './index.css'
import {BiArrowBack} from 'react-icons/bi'
import OnClickEditorSongItem from '../OnClickEditorSongItem'

const editorsPicsList = [
  {
    id: 0,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628511056/Rectangle_480_ttg4mr.png',
    name: 'Telugu Romance',
    songTitle: 'All Out 90’s Telugu',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519108/Rectangle_481_tm9ggk.png',
    name: 'Bollywood R&B',
    songTitle: 'Bollywood R&B',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519111/Rectangle_482_glterz.png',
    name: 'Marati Hits',
    songTitle: 'Romantic Marati Hits',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519155/Rectangle_483_ah5vjp.png',
    name: 'Sufi & Bollywood',
    songTitle: 'Sufi & Bollywood',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519170/Rectangle_484_ykslai.png',
    name: 'Romantic Tamizha',
    songTitle: 'Romantic Tamizha',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628519182/Rectangle_538_mwr7o1.png',
    name: 'Ardha Sathabdham',
    songTitle: 'Telugu Romance',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528726/Rectangle_485_l2eabk.png',
    name: 'Bahubali',
    songTitle: 'Happy Oye!',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528738/Rectangle_486_luks88.png',
    name: 'Dhruva',
    songTitle: 'Soulful',
  },
  {
    id: 8,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528788/Rectangle_487_ibugil.png',
    name: 'Arjun Reddy',
    songTitle: 'Throwback 90s',
  },
  {
    id: 9,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528799/Rectangle_488_wymne8.png',
    name: 'Awe',
    songTitle: 'Hindustani',
  },
  {
    id: 10,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528837/Rectangle_489_ocr58u.png',
    name: 'Oopiri',
    songTitle: 'Bollywood Araby',
  },
  {
    id: 11,
    imgUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1628528850/Rectangle_541_le1txd.png',
    name: 'Nuve kavalli',
    songTitle: 'Soft 50s',
  },
]

const songsList = [
  {
    id: 0,
    track: 'The Life of  Ram ',
    album: '96',
    time: '02:55',
    artist: 'Kala Bhairava',
    added: '2 Months ago',
  },
  {
    id: 1,
    track: 'Neetho unte',
    album: 'Josh',
    time: '02:55',
    artist: 'Sooranna',
    added: '5 days  ago',
  },
  {
    id: 2,
    track: 'Seetha andhallu ',
    album: 'Subbasankalpam',
    time: '02:55',
    artist: 'Subbasankalpam',
    added: '2 years ago',
  },
  {
    id: 3,
    track: 'Love u chinna',
    album: 'Love mocktail',
    time: '02:55',
    artist: 'Love mocktail',
    added: '2 Months ago',
  },
  {
    id: 4,
    track: 'Neeve Neeve',
    album: 'Amma nanna oka thamil ammayi ',
    time: '02:55',
    artist: 'G. V. Prakash',
    added: '1 Months ago',
  },
  {
    id: 5,
    track: 'Hoyna Hoyna ',
    album: 'Kaathalae kaathalae - Version 1',
    time: '02:55',
    artist: 'Daler Mehndi',
    added: '6 Months ago',
  },
  {
    id: 6,
    track: 'Bujji Bangarm',
    album: 'Guna369',
    time: '02:55',
    artist: 'Sarath Santosh',
    added: '8 days ago',
  },
  {
    id: 7,
    track: 'Kaathalae kaathalae - Version 2',
    album: 'Tholiprema ',
    time: '02:55',
    artist: 'Nakash Aziz',
    added: '2 Months ago',
  },
]

class OnClickEditors extends Component {
  state = {
    selectedSongName: songsList[0],
    selectSongId: songsList[0].id,
  }

  selectedSong = id => {
    this.setState({
      selectedSongName: songsList[id],
      selectSongId: songsList[id].id,
    })
  }

  onClickHome = () => {
    const {history} = this.props

    return history.replace('/')
  }

  render() {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    const cardId = Number(id)

    const {selectedSongName, selectSongId} = this.state

    return (
      <div className="onClickEditorsBg">
        <button type="button" className="back-btn" onClick={this.onClickHome}>
          <BiArrowBack />
          <p>Back</p>
        </button>

        <div className="pic-container-editors">
          <img
            src={editorsPicsList[cardId].imgUrl}
            alt={editorsPicsList[cardId].name}
            className="editors-pic-img"
          />
          <div className="editor-pic-name-container">
            <p className="editors-picks-paragraph-hide-sm">Editors picks</p>
            <h1 className="song-name">{editorsPicsList[cardId].songTitle}</h1>
            <p className="editors-picks-paragraph">Mickey J. Meyer</p>
          </div>
        </div>
        <div className="track-heading-container">
          <p className="editors-picks-paragraph12">Track </p>
          <p className="editors-picks-paragraph1">Track </p>
          <p className="editors-picks-paragraph1">Album </p>
          <p className="editors-picks-paragraph1">Time </p>
          <p className="editors-picks-paragraph1">Artist</p>
          <p className="editors-picks-paragraph1">Added</p>
        </div>
        <hr className="line" />
        <ul className="songs-list">
          {songsList.map(eachSong => (
            <OnClickEditorSongItem
              key={eachSong.id}
              selectedSong={this.selectedSong}
              songsList={eachSong}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <ul className="songs-list-sm">
          {songsList.map(eachSong => (
            <OnClickEditorSongItem
              key={eachSong.id}
              selectedSong={this.selectedSong}
              songsList={eachSong}
              isActive={selectSongId === eachSong.id}
            />
          ))}
        </ul>

        <div className="bottom-play-container">
          <div className="bottom-img-song-container">
            <div className="audio-container1">
              <img
                src={editorsPicsList[cardId].imgUrl}
                alt={editorsPicsList[cardId].name}
                className="play-img"
              />
              <div className="e-d-p-c">
                <h1 className="editors-picks-paragraph-h">
                  {editorsPicsList[cardId].songTitle}
                </h1>
                <p className="artist">{selectedSongName.track}</p>
              </div>
            </div>
            <div className="audio-container">
              <audio src="Bell.mp3" type="audio/mpeg" controls>
                <track kind="captions" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OnClickEditors
