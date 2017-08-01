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
import Dish from './ui/pages/Dish/Dish'
import Dishes from './ui/pages/Dishes/Dishes'
import Cart from './ui/pages/Cart/Cart'
import Profile from './ui/pages/Profile/Profile'


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
          store.dispatch({ type: 'SIGN_IN', username: res.data.user.username })
        }
      )
    }

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(
      res => {
        const { dishes } = res.data
        store.dispatch({ type: 'LOAD_DISHES', dishes })
      }
    )
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
                <Route path="/dish/:dishId" component={Dish} />
                <Route path="/cart" component={Cart} />
                <Route path="/dishes" component={Dishes} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App