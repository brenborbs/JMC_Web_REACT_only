import React, { Component } from 'react';
import CasesLink from './CasesLink';

export default class CasesMap extends Component {
  render() {
    const { paints } = this.props;
    return (
      <React.Fragment>
        {paints.map(paint => (
          <CasesLink paint={paint} key={paint.id} />
        ))}
      </React.Fragment>
    )
  }
}
