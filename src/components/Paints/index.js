import React, { Component } from 'react';
import PaintMain from './paintMain';
import Banner from './banner';

 class Paint extends Component {
  render() {

    return (
      <div>
        <Banner />
        <PaintMain />
      </div>
    )
  }
}

export default Paint;
