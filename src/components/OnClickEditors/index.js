import {Link} from 'react-router-dom'
import './index.css'

const OnClickEditors = props => {
  const {id} = props

  return (
    <Link to={`/${id}`}>
      <div className="home-container" to="">
        <h1>Hai</h1>
      </div>
    </Link>
  )
}

export default OnClickEditors
