import React, { Component } from 'react';
import UserCreate from '../components/UserCreate';
import LanguageContext from '../components/contexts/LanguageContext';
import ColorContext from '../components/contexts/ColorContext';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
