import React, { Component } from 'react';
import Header from '../src/Components/Header.js';
import Body from '../src/Components/Body'

class App extends Component {
  render()
  {
    return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
  }
}

export default App;
