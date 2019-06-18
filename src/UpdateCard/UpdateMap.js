import React, { Component } from 'react';
import UpdateLink from './UpdateLink';

export default class UpdateMap extends Component {
  render() {
    const { newsUpdate } = this.props;
    return (
      <div>
        <React.Fragment>
        {newsUpdate.map(newUpdate => (
          <UpdateLink newUpdate={newUpdate} key={newUpdate.id} />
        ))}
      </React.Fragment>
      </div>
    )
  }
}
