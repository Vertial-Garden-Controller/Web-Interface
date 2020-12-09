import React from 'react'
import axios from 'axios'
import { options } from '../App'
import { number } from 'prop-types'

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

  async componentDidMount() {
    const res = await axios
      .get(`/user/${this.props.user_id}`, options)
      .catch((error) => {
        if (error.response) {
          alert(`
            ERROR: ${error.response.data.error}
            DETAIL: ${error.response.data.detail}
          `)
        }
      })
    this.setState({
      firstname: res.data.user.firstname,
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
          <p>Hello{this.state.firstname ? ', ' + this.state.firstname : ''}!</p>
        </header>
      </div>
    )
  }
}

NewGarden.propTypes = {
  user_id: number,
}

export default NewGarden
