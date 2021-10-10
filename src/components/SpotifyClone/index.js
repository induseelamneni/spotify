import {Component} from 'react'

import Profile from '../Profile'
import YourMusic from '../YourMusic'
import Home from '../Home'
import NavBar from '../NavBar'
import PlayList from '../PlayList'

import './index.css'

const navBarItems = [
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
]

class SpotifyClone extends Component {
  state = {
    activeNavBarItem: navBarItems[1].name,
  }

  renderComponent = () => {
    const {activeNavBarItem} = this.state

    switch (activeNavBarItem) {
      case navBarItems[0].name:
        return <Profile />
      case navBarItems[2].name:
        return <YourMusic />
      case navBarItems[3].name:
        return <PlayList />

      default:
        return <Home />
    }
  }

  changeActiveNavBarItem = activeNavBarItem => {
    this.setState({activeNavBarItem})
  }

  render() {
    const {activeNavBarItem} = this.state

    return (
      <div className="spotify-app-bg">
        <NavBar
          activeNavBarItem={activeNavBarItem}
          changeActiveNavBarItem={this.changeActiveNavBarItem}
          navBarItems={navBarItems}
          className="large-device-nav-bar"
        />
        <div className="portfolio-body">
          <div className="active-section">{this.renderComponent()}</div>
        </div>
      </div>
    )
  }
}

export default SpotifyClone
