import React, { Component } from 'react';

import Type from './components/Type';
import Quantity from './components/Quantity';
import Frequency from './components/Frequency';
import Button from './components/Button';

import './styles/App.scss';

const DEFAULT_STATE = {
  type: 'sub'
};

class App extends Component {
  constructor() {
    super();

    this.state = DEFAULT_STATE;
  }

  render() {
    return (
      <div className="App">
        <Type type={ this.state.type } onClickType={ this.onClickType } />
        <Quantity />
        <Frequency />
        <Button />
      </div>
    );
  }

  onClickType( type ) {
    this.setState( { type } );
  }
}

export default App;
