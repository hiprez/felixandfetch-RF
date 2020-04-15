import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Type from './components/Type';
import Quantity from './components/Quantity';
import Frequency from './components/Frequency';
import Button from './components/Button';

import './styles/App.scss';

const DEFAULT_STATE = {
  type: 'sub',
  quantity: 'Single',
  quantityOptions: [],
  frequencyOptions: []
};

class App extends Component {
  constructor() {
    super();

    this.onClickType = this.onClickType.bind( this );
    this.onClickQuantity = this.onClickQuantity.bind( this );

    this.variants = [];
    this.state = DEFAULT_STATE;
  }

  render() {
    return (
      <div className="App">
        <Type
          type={ this.state.type }
          onClickType={ this.onClickType } />
        <Quantity
          quantity={ this.state.quantity }
          quantityOptions={ this.state.quantityOptions }
          onClickQuantity={ this.onClickQuantity } />
        <Frequency />
        <Button />
      </div>
    );
  }

  componentDidMount() {
    axios.get( 'https://felixandfetch.com/products/joint-strength-chews-rf.js' )
      .then( ( res ) => {
        var { data } = res;
        if ( !data ) { throw new Error( 'Response error.' ); return false; }

        this._eachVariant( data );
      })
      .catch( ( err ) => {
        console.log( err );
      });
  }

  _eachVariant( data ) {
    var { variants } = data;
    if ( !variants ) { console.log( 'No variants.' ); return false; }
    var quantityOptions = [];
    var frequencyOptions = [];

    variants.forEach( ( variant ) => {
      console.log( variant );
      this.variants.push( variant );
      quantityOptions.push( variant.option2 );
      frequencyOptions.push( variant.option3 );
    });

    quantityOptions = _.uniq( quantityOptions );
    frequencyOptions = _.uniq( frequencyOptions );

    this.setState({
      quantityOptions,
      frequencyOptions
    });
  }

  onClickType( type ) {
    this.setState( { type } );
  }

  onClickQuantity( quantity ) {
    this.setState( { quantity } );
  }
}

export default App;
