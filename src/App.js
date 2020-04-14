import React from 'react';

import Type from './components/Type';
import Quantity from './components/Quantity';
import Frequency from './components/Frequency';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <Type />
      <Quantity />
      <Frequency />
      <Button />
    </div>
  );
}

export default App;
