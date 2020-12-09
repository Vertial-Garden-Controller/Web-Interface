import React from 'react'
import axios from 'axios'
import { options } from '../App'
import { number, func } from 'prop-types'
import { Link } from 'react-router-dom'
// import Routes from '../routes'

class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      middlename: '',
      lastname: '',
      emailAddress: '',
      password: '',
      user_id: 1,
    }
    this.value = 0

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

  async postNewUser() {
    const res = await axios
      .post(
        '/user/signup',
        {
          firstname: this.state.firstname,
          middlename: this.state.middlename,
          lastname: this.state.lastname,
          email: this.state.emailAddress,
          password: this.state.password,
        },
        options
      )
      .catch((error) => {
        if (error.response) {
          alert(`
          ERROR: ${error.response.data.error}
          DETAIL: ${error.response.data.detail}
        `)
        }
      })
    this.props.updateUserId(parseInt(res.data.user_id))
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.postNewUser()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to Garden Manager*! Signup with the form below:</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input
                name="firstname"
                type="text"
                value={this.state.firstname}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Middle Name:
              <input
                name="middlename"
                type="text"
                value={this.state.middlename}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                name="lastname"
                type="text"
                value={this.state.lastname}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
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
          <Link to="/mygarden">My Garden</Link>
        </header>
      </div>
    )
  }
}

NewUser.propTypes = {
  user_id: number,
  updateUserId: func,
}

export default NewUser
