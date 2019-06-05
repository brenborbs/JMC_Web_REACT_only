import React, { Component } from 'react';
import UpdateLink from './UpdateLink';

 class UpdateMap extends Component {
  render() {
    const { newsUpdate } = this.props;
    return (
      <React.Fragment>
        {newsUpdate.map((newUpdate) => (
          <UpdateLink 
          newUpdate={newUpdate}
          key={newUpdate.id}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default UpdateMap;
