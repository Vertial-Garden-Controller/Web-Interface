import React from 'react';
import axios from 'axios';

class MyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      user_id: 0
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
    axios.get(`http://localhost:5001/user/${this.state.user_id}`)
    .then((response) => {
      alert(
        `User information:
        ${response.data.user.firstname},
        ${response.data.user.middlename},
        ${response.data.user.lastname},
        ${response.data.user.email},
        ${response.data.user.password},
        `
      );
    })
    .catch((error) => {
      console.log(error);
    });
    event.preventDefault();
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
                onChange={this.handleInputChange} />
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
    );
  }
}

export default MyInfo;
