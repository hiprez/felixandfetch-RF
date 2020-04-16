import React, { Component } from 'react';

const TITLE_MAP = {
  one: 'Add to Cart',
  sub: 'Subscribe Now'
};

class Submit extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Submit">
        <label style={ { display: [ 'none', 'block' ][ +( 'sub' === this.props.type ) ] } }>* Easily change, cancel or reschedule</label>
        <div className="submit-button" onClick={ ( e ) => { this.onClick(); } }>
          { TITLE_MAP[ this.props.type ] }
        </div>
      </div>
    );
  }

  onClick() {
    this.props.onClickSubmit();
  }
}

export default Submit;
