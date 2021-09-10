import {Component} from 'react'
import './index.css'

class NavBar extends Component {
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

  render() {
    return (
      <nav className="left-nav-bar">
        <img
          alt="spotify"
          img="https://res.cloudinary.com/dmd5feuh9/image/upload/v1631171139/9a_error_jeq6vk.png"
          className="spotify-icon-style"
        />
        <ul className="ul-container ">{this.navItemList()}</ul>
      </nav>
    )
  }
}
export default NavBar
