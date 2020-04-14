import React, { Component } from 'react';

class Type extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Type">
        <div
          className={ this.props.type === 'one' ? 'active' : '' }
          onClick={ this.onClick.bind( this, 'one' ) }>
          One Time Purchase
        </div>
        <div
          className={ this.props.type === 'sub' ? 'active' : '' }
          onClick={ this.onClick.bind( this, 'sub' ) }>
          Subscribe & Save
        </div>
      </div>
    );
  }

  onClick( e, type ) {
    this.props.onClickType( type );
  }
}

export default Type;
