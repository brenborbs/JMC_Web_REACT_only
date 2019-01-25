import React, { Component } from 'react';
import Banner from './banner';
import Desc from './desc';
// import Consult from './consult';
// import Blog from './blog';

 class Consulting extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Desc />
        {/* < Consult />
        < Blog /> */}
      </div>
    )
  }
}

export default Consulting;