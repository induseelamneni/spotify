import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SpotifyClone from './components/SpotifyClone'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import OnClickEditors from './components/OnClickEditors'
import OnClickGenresAndMoods from './components/OnClickGenresAndMoods'
import OnClickNewReleases from './components/OnClickNewReleases'
import OnClickPodcastAndPlayList from './components/OnClickPodcastAndPlayList'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={SpotifyClone} />

      <ProtectedRoute path="/editors/:id" component={OnClickEditors} />
      <ProtectedRoute path="/genre/:id" component={OnClickGenresAndMoods} />
      <ProtectedRoute path="/newReleases/:id" component={OnClickNewReleases} />

      <ProtectedRoute
        path="/playList/:id"
        component={OnClickPodcastAndPlayList}
      />
    </Switch>
  </BrowserRouter>
)

export default App
