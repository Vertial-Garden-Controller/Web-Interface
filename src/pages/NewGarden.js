import React from 'react'
import axios from 'axios'
import { options } from '../App'

class NewGarden extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: 0,
      coords: {
        x: 0,
        y: 0,
      },
      zip_code: 0,
      firstname: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log(this.state.user_id)
    axios
      .get(`/user/${this.state.user_id}`, options)
      .then((response) => {
        this.setState({
          firstname: response.data.user.firstname,
        })
      })
      .catch((error) => {
        alert(`
        ERROR: ${error.response.data.error}
        DETAIL: ${error.response.data.detail}
      `)
      })
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
      .post(
        '/garden/new',
        {
          user_id: this.state.user_id,
          coords: {
            x: this.state.coords.x,
            y: this.state.coords.y,
          },
          zip_code: this.state.zip_code,
        },
        options
      )
      .then(function (response) {
        alert('Your Garden Id is: ' + response.data.garden_id)
      })
      .catch(function (error) {
        alert(`
        ERROR: ${error.response.data.error}
        DETAIL: ${error.response.data.detail}
      `)
      })
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello, {this.state.firstname}!</p>
        </header>
      </div>
    )
  }
}

export default NewGarden
