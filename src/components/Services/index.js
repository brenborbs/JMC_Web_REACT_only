import React, { Component } from 'react';
import Banner from './banner';
import Detail from './detail';
import Pie from './pie';

 class Service extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Pie />
        <Detail />
      </div>
    )
  }
}

export default Service;