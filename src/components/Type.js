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
          <i class="fas fa-check-circle"></i>
          <div>
            <div className="icon-container">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div>One Time Purchase</div>
          </div>
        </div>
        <div
          className={ this.props.type === 'sub' ? 'active' : '' }
          onClick={ ( e ) => { this.onClick( 'sub' ); } }>
          <i class="fas fa-check-circle"></i>
          <div>
            <div className="icon-container">
              <i className="fas fa-calendar-plus"></i>
            </div>
            <div>Subscribe & Save*</div>
          </div>
        </div>
      </div>
    );
  }

  onClick( type ) {
    this.props.onClickType( type );
  }
}

export default Type;
