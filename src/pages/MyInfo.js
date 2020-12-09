import React from 'react'
import axios from 'axios'
import { options } from '../App'

class MyInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
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

  handleSubmit(event) {
    axios
      .get(`/user/${this.state.user_id}`, options)
      .then((response) => {
        alert(`
        User information:
        First name: ${response.data.user.firstname},
        Middle name: ${
          response.data.user.middlename
            ? response.data.user.middlename
            : '*not provided'
        },
        Last name: ${
          response.data.user.lastname
            ? response.data.user.lastname
            : '*not provided'
        },
        Email address: ${response.data.user.email},
        password (shh): ${
          response.data.user.password
            ? response.data.user.password
            : '*not provided'
        }
      `)
      })
      .catch((error) => {
        if (error.response) {
          alert(`
          ERROR: ${error.response.data.error}
          DETAIL: ${error.response.data.detail}
        `)
        }
      })
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <form onSubmit={this.handleSubmit}>
              <label>
                User Id:
                <input
                  name="user_id"
                  type="number"
                  value={this.state.user_id}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <label>
                Submit:
                <input type="submit" value="Submit" />
              </label>
            </form>
          </p>
        </header>
      </div>
    )
  }
}

export default MyInfo
