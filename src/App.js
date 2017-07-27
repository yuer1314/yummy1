import React, { Component } from 'react'
import './App.css'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import Dashboard from './ui/pages/Dashboard/Dashboard'
import AlertBox from './ui/shared/AlertBox/AlertBox'
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios'
import Settings from './settings'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  componentWillMount() {
    let userId = localStorage.getItem('userId')
    if(userId) {
      axios.get(`${Settings.host}/user/${userId}`).then(
        res => {
          console.log('App componentWillMount...', res.data)
          store.dispatch({ type: 'SIGN_IN', username: res.data.user.username })
        }
      )
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <AlertBox />
          <Router>
            <div>
              <Route render={({ location }) => {
                  return location.pathname !== '/' ?
                  (<Sidebar />) : null
                }} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login"  component={Login} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App