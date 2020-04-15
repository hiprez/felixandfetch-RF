import React, { Component } from 'react';

class Quantity extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="Quantity">
        <div onClick={ ( e ) => { var active = !this.state.active; this.setState( { active } ); } }>
          <label>Quantity:</label>
          <div className="value">{ this.props.quantity }</div>
        </div>
        <ul style={ { display: [ 'none', 'block' ][ +this.state.active ] } }>
          { this.props.quantityOptions.map( this.eachQuantity, this ) }
        </ul>
      </div>
    );
  }

  eachQuantity( quantity ) {
    return (
      <li
        key={ quantity }
        onClick={ ( e ) => { this.onClickQuantity( quantity ); } }>
        { quantity }
      </li>
    );
  }

  onClickQuantity( quantity ) {
    this.props.onClickQuantity( quantity );
    this.setState( { active: false } );
  }
}

export default Quantity;
