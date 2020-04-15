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
        <button onClick={ ( e ) => { this.onClick(); } }>
          { TITLE_MAP[ this.props.type ] }
        </button>
      </div>
    );
  }

  onClick() {
    this.props.onClickSubmit();
  }
}

export default Submit;
