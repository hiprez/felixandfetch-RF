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
          onClick={ ( e ) => { this.onClick( 'one' ); } }>
          One Time Purchase
        </div>
        <div
          className={ this.props.type === 'sub' ? 'active' : '' }
          onClick={ ( e ) => { this.onClick( 'sub' ); } }>
          Subscribe & Save
        </div>
      </div>
    );
  }

  onClick( type ) {
    this.props.onClickType( type );
  }
}

export default Type;
