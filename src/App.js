import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Type from './components/Type';
import Quantity from './components/Quantity';
import Frequency from './components/Frequency';
import Submit from './components/Submit';

import './styles/App.scss';

const DEFAULT_STATE = {
  type: 'sub',
  quantity: 'Single',
  quantityOptions: [],
  frequency: 'Monthly',
  frequencyOptions: []
};

const QUANTITY_MAP = {
  'Single': 1,
  'Pet Lover Set': 2,
  'All Star Set': 3,
  'VIP Set': 4
};

class App extends Component {
  constructor() {
    super();

    this.onClickType = this.onClickType.bind( this );
    this.onClickQuantity = this.onClickQuantity.bind( this );
    this.onClickFrequency = this.onClickFrequency.bind( this );
    this.onClickSubmit = this.onClickSubmit.bind( this );

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
        <Frequency
          type={ this.state.type }
          frequency={ this.state.frequency }
          frequencyOptions={ this.state.frequencyOptions }
          onClickFrequency={ this.onClickFrequency } />
        <Submit
          type={ this.state.type }
          onClickSubmit={ this.onClickSubmit } />
      </div>
    );
  }

  componentDidMount() {
    axios.get( 'https://felixandfetch.com/products/joint-strength-chews-rf.js' )
      .then( ( res ) => {
        var { data } = res;
        if ( !data ) { throw new Error( 'Response error.' ); return false; }

        this.id = data.id;
        this._cacheSelectors()
          ._eachVariant( data )
          ._setActive();
      })
      .catch( ( err ) => {
        console.log( err );
      });
  }

  _cacheSelectors() {
    this.$featuredImage = document.createElement( 'img' );
    this.$productImages = document.querySelector( '#product_images' );
    this.$priceField = document.querySelector( '.product-page--pricing #price-field .money' );
    this.$compareAtPrice = document.querySelector( '.product-page--pricing .compare-at-price .money' );

    this.$featuredImage.style = 'width: 100%; max-width: 100%;';
    this.$productImages.appendChild( this.$featuredImage );

    return this;
  }

  _eachVariant( data ) {
    var { variants } = data;
    if ( !variants ) { console.log( 'No variants.' ); return false; }
    var quantityOptions = [];
    var frequencyOptions = [];

    variants.forEach( ( variant ) => {
      this.variants.push( variant );
      quantityOptions.push( variant.option2 );
      frequencyOptions.push( variant.option3 );
    });

    quantityOptions = _.uniq( quantityOptions );
    frequencyOptions = _.uniq( frequencyOptions );
    _.pull( frequencyOptions, 'One Time Purchase' );

    this.setState({
      quantityOptions,
      frequencyOptions
    });

    return this;
  }

  _setActive() {
    var option2 = this.state.quantity;
    var option3 = this.state.frequency;
    var active = this.active = _.filter( this.variants, { option2, option3 } )[ 0 ];
    console.log( 'active', active );

    this.$featuredImage.src = active.featured_image.src;
    this.$priceField.innerText = ( ( active.price || 0 ) / 100 ).toFixed( 2 );
    this.$compareAtPrice.innerText = ( ( active.compare_at_price || 0 ) / 100 ).toFixed( 2 );
  }

  onClickType( type ) {
    var state = { type };
    state.frequency = {
      one: 'One Time Purchase',
      sub: 'Monthly'
    }[ type ];

    this.setState( state, this._setActive );
  }

  onClickQuantity( quantity ) {
    this.setState( { quantity }, this._setActive );
  }

  onClickFrequency( frequency ) {
    this.setState( { frequency }, this._setActive );
  }

  onClickSubmit() {
    var { active } = this;
    if ( !active ) return false;
    var { id } = active;

    axios.post( 'https://felixandfetch.com/cart/add.js', {
      items: [
        { id }
      ]
    })
    .then( ( res ) => {
      console.log( res );
      window.product.update_cart();
    })
    .catch( ( err ) => {
      console.log( err );
    });
  }
}

export default App;
