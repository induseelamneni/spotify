import {Component} from 'react'

import './index.css'

import {FaBars} from 'react-icons/fa'

const navBarItemsSm = [
  {
    id: 0,
    iconUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633587497/person-spotify-modi_czhkgd.png',
    name: 'PROFILE',
  },
  {
    id: 1,
    iconUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633587873/home_piu6qy.png',
    name: 'HOME',
  },

  {
    id: 2,
    iconUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633587966/music-note-beamed_ri1aky.png',
    name: 'YOUR MUSIC',
  },
  {
    id: 3,
    iconUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633588155/music-note-list_yqfyz2.png',
    name: 'PLAYLIST',
  },
  {
    id: 4,
    iconUrl:
      'https://res.cloudinary.com/dmd5feuh9/image/upload/v1633605699/times-solid_alez7i.png',
  },
]

class NavBar extends Component {
  state = {
    isNavSmallClicked: true,
  }

  navItemList = () => {
    const {navBarItems, activeNavBarItem, changeActiveNavBarItem} = this.props

    return navBarItems.map(navItem => {
      const onClickNavBarItem = () => changeActiveNavBarItem(navItem.name)
      const buttonClassName =
        activeNavBarItem === navItem.name ? 'active-item' : ''
      return (
        <li
          className={`nav-icons-list-container ${buttonClassName}`}
          key={navItem.id}
          onClick={onClickNavBarItem}
        >
          <img src={navItem.iconUrl} alt={navItem.name} className="icon" />
          <p className="icon-name">{navItem.name}</p>
        </li>
      )
    })
  }

  onClickProfileSm = () => {
    const {changeActiveNavBarItem} = this.props

    return changeActiveNavBarItem('PROFILE')
  }

  onClickHomeSm = () => {
    const {changeActiveNavBarItem} = this.props

    return changeActiveNavBarItem('HOME')
  }

  onClickMusicSm = () => {
    const {changeActiveNavBarItem} = this.props

    return changeActiveNavBarItem('YOUR MUSIC')
  }

  onClickPlaylistSm = () => {
    const {changeActiveNavBarItem} = this.props

    return changeActiveNavBarItem('PLAYLIST')
  }

  displayNavbarListForSmall = () => (
    <div className="ul-small-icon-display">
      <button type="button" className="btn" onClick={this.onClickProfileSm}>
        <img
          src={navBarItemsSm[0].iconUrl}
          alt="profile"
          className="person-icon"
        />
      </button>
      <button type="button" className="btn" onClick={this.onClickHomeSm}>
        <img
          src={navBarItemsSm[1].iconUrl}
          alt="home"
          className="person-icon"
        />
      </button>
      <button type="button" className="btn" onClick={this.onClickMusicSm}>
        <img
          src={navBarItemsSm[2].iconUrl}
          alt="your music"
          className="person-icon"
        />
      </button>
      <button type="button" className="btn" onClick={this.onClickPlaylistSm}>
        <img
          src={navBarItemsSm[3].iconUrl}
          alt="play list"
          className="person-icon"
        />
      </button>
      <button type="button" className="btn">
        <img
          src={navBarItemsSm[4].iconUrl}
          alt="cross-icon"
          className="person-icon"
        />
      </button>
    </div>
  )

  onToggleDisplayOptions = () => {
    this.setState(prevState => ({
      isNavSmallClicked: !prevState.isNavSmallClicked,
    }))
  }

  onClickLogo = () => {
    const {changeActiveNavBarItem} = this.props

    return changeActiveNavBarItem('PROFILE')
  }

  render() {
    const {isNavSmallClicked} = this.state
    console.log(isNavSmallClicked)
    return (
      <nav className="left-nav-bar">
        <div className="nav-bar-lg">
          <button
            type="button"
            className="spotify-log-btn"
            onClick={this.onClickLogo}
          >
            <img
              alt="spotify"
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1632983940/Vector_4_bifzwi.png"
              className="spotify-icon-style"
            />
          </button>
          <ul className="ul-container ">{this.navItemList()}</ul>
        </div>

        <div className="nav-bar-sm">
          <button
            type="button"
            className="btn"
            onClick={this.onToggleDisplayOptions}
          >
            {isNavSmallClicked ? (
              <div className="logo-and-bars-icon-container">
                <button
                  type="button"
                  className="spotify-log-btn"
                  onClick={this.onClickLogo}
                >
                  <img
                    alt="spotify"
                    src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1632983940/Vector_4_bifzwi.png"
                    className="spotify-icon-style"
                  />
                </button>
                <FaBars className="bars-icon" />
              </div>
            ) : (
              this.displayNavbarListForSmall()
            )}
          </button>
        </div>
      </nav>
    )
  }
}
export default NavBar
