import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './pages/main'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      
    }
  }


  render() {
    return (
      <div >
        <Main />
      </div>
    );
  }
}

export default App;
