import React from 'react';
import axios from 'axios';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      middlename: '',
      lastname: '',
      emailAddress: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    axios.post('http://localhost:5001/user/signup', {
      firstname: this.state.firstname,
      middlename: this.state.middlename,
      lastname: this.state.lastname,
      email: this.state.emailAddress,
      password: this.state.password,
    })
    .then(function (response) {
      alert("New User Created With ID: " + response.data.user_id);
    })
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Garden Manager*!
            Signup with the form below:
          </p>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input
                name="firstname"
                type="text"
                value={this.state.firstname}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Middle Name:
              <input
                name="middlename"
                type="text"
                value={this.state.middlename}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Last Name:
              <input
                name="lastname"
                type="text"
                value={this.state.lastname}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Email Address:
              <input
                name="emailAddress"
                type="text"
                value={this.state.emailAddress}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange} />
            </label>
            <br />
              <label>
                Submit: 
                <input type="submit" value="Submit" />
              </label>
          </form>
        </header>
      </div>
    );
  }
}

export default NewUser;
