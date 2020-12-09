import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyInfo from './pages/MyInfo'
import NewGarden from './pages/NewGarden'
import NewUser from './pages/NewUser'
// import SignupPage from './SignupPage'

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user_id: 1 }
    this.UserIDHandler = this.UserIDHandler.bind(this)
  }

  UserIDHandler(new_user_id) {
    this.setState({
      user_id: new_user_id,
    })
    console.log(this.state.user_id, typeof this.state.user_id)
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route path="/myinfo" user_id={this.state.user_id} component={MyInfo} />
        <Route
          path="/user/new"
          render={(props) => (
            <NewUser {...props} user_id={this.state.user_id} updateUserId={this.UserIDHandler} />
          )}
        />
        <Route
          path="/mygarden"
          render={(props) => (
            <NewGarden {...props} user_id={this.state.user_id} />
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
