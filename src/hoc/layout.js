import React, { Component } from 'react';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';

 class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout;
