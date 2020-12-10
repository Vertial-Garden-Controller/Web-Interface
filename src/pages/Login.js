import React from 'react'
import { Link } from 'react-router-dom'
import { func } from 'prop-types'
import axios from 'axios'
import { options } from '../App'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      user_id: 0,
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
    const res = await axios
      .post(
        '/user/login',
        { email: this.state.email, password: this.state.password },
        options
      )
      .catch((error) => {
        if (error.response) {
          alert(`
          ERROR: ${error.response.data.error}
          DETAIL: ${error.response.data.detail}`)
        }
      })
    if (res) {
      this.props.updateUserId(parseInt(res.data.user_id))
      this.setState({
        user_id: parseInt(res.data.user_id),
      })
    }
  }

  render() {
    if (this.state.user_id) {
      return (
        <div className="App">
          <header className="App-header">
            Login Success!
            <Link to="/myinfo">My Information</Link>
            {/* <Link to="/mygarden">My Garden</Link> */}
            <p>
              <Link to="/">Back</Link>
            </p>
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
                name="email"
                type="text"
                value={this.state.email}
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
            <p>
              <Link to="/">Back</Link>
            </p>
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
