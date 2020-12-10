import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Home Page</p>
          <br/>
          <Link to="/user/login">Login</Link>
          <br/>
          <Link to="/user/signup">Signup</Link>
        </header>
      </div>
    )
  }
}

export default HomePage
