import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Home Page
          </p>
        </header>
        <div>
          <p>
            Hello World
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
