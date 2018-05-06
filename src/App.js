import React, { Component } from 'react';
import AddColorForm from './components/AddColorForm/AddColorForm'
import Number from './components/Number/Number'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Number/>
        <AddColorForm/>
      </div>
    );
  }
}

export default App;
