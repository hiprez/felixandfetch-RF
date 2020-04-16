import React, { Component } from 'react';

class Frequency extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="Frequency" style={ { display: [ 'none', 'block' ][ +( this.props.type === 'sub' ) ] } }>
        <div onClick={ ( e ) => { var active = !this.state.active; this.setState( { active } ); } }>
          <label>Frequency:</label>
          <div className="value">{ this.props.frequency }</div>
          <i className={ 'fas fa-chevron-circle-' + ( this.state.active ? 'up' : 'down' ) }></i>
        </div>
        <ul style={ { display: [ 'none', 'block' ][ +this.state.active ] } }>
          { this.props.frequencyOptions.map( this.eachFrequency, this ) }
        </ul>
      </div>
    );
  }

  eachFrequency( frequency ) {
    return (
      <li
        key={ frequency }
        onClick={ ( e ) => { this.onClickFrequency( frequency ); } }>
        { frequency }
      </li>
    );
  }

  onClickFrequency( frequency ) {
    this.props.onClickFrequency( frequency );
    this.setState( { active: false } );
  }
}

export default Frequency;
