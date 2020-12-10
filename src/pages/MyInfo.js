import React from 'react'
import axios from 'axios'
import { options } from '../App'
import { number } from 'prop-types'

class MyInfo extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.user_id)
    this.state = {
      user: {},
      user_id: 0,
    }
  }

  async componentDidMount() {
    const res = await axios
      .get(`/user/${this.props.user_id}`, options)
      .catch((error) => {
        if (error.response) {
          alert(`
          ERROR: ${error.response.data.error}
          DETAIL: ${error.response.data.detail}`)
        }
      })
    if (res) {
      this.setState({
        user: res.data.user,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My Info:</p>
          <p>First: {this.state.user.firstname}</p>
          <p>
            Middle:{' '}
            {this.state.user.middlename ? this.state.user.middlename : '<none>'}
          </p>
          <p>
            Last:{' '}
            {this.state.user.lastname ? this.state.user.lastname : '<none>'}
          </p>
          <p>Email Address: {this.state.user.email}</p>
          <p>Password: {this.state.user.password}</p>
        </header>
      </div>
    )
  }
}

MyInfo.propTypes = {
  user_id: number,
}

export default MyInfo
