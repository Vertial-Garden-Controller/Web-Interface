import React from 'react'
import { Link } from 'react-router-dom'
import { func } from 'prop-types'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      user_id: 0
    }

  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    this.props.updateUserId(1)
    this.setState({
      user_id: 1
    })
  }

  render() {
    if(this.state.user_id) {
      return (
        <div className="App">
          <header className="App-header">
            Login Success!
            <Link to="/myinfo">My Information</Link>
            <Link to="/mygarden">My Garden</Link>
          </header>
        </div>
      )
    }

    return (
      <div className="App">
          <header className="App-header">
          <p>Enter your email and password to login:</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email Address:
              <input
                name="emailAddress"
                type="text"
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Submit:
              <input type="submit" value="Submit" />
            </label>
          </form>
          </header>
        </div>
    )
  }
}

Login.propTypes = {
  updateUserId: func,
}

export default Login
