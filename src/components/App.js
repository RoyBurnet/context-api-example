import React, { Component } from 'react';
import UserCreate from '../components/UserCreate'

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        Select a language:
        <i
          className="flag us"
          onClick={() => this.onLanguageChange('english')}
        />
        <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        <UserCreate/>
      </div>
    );
  }
}

export default App;
