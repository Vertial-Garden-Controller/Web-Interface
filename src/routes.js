import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyInfo from './pages/MyInfo'
import NewGarden from './pages/NewGarden'
import NewUser from './pages/NewUser'
import Login from './pages/Login'

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user_id: 0 }
    this.UserIDHandler = this.UserIDHandler.bind(this)
  }

  UserIDHandler(new_user_id) {
    this.setState({
      user_id: new_user_id,
    })
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/myinfo"
          render={(props) => <MyInfo {...props} user_id={this.state.user_id} />}
        />
        <Route
          path="/mygarden"
          render={(props) => (
            <NewGarden {...props} user_id={this.state.user_id} />
          )}
        />
        <Route path="/user/signup" render={(props) => <NewUser {...props} />} />
        <Route
          path="/user/login"
          render={(props) => (
            <Login {...props} updateUserId={this.UserIDHandler} />
          )}
        />
        {/* <Route
          path="/signup"
          user_id={this.state.user_id}
          updateUserId={this.updateUserId}
          component={SignupPage}
        /> */}
      </Router>
    )
  }
}

export default Routes
