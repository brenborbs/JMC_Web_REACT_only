import React, { Component } from 'react';
import Service from './service';

 class ServiceList extends Component {
  render() {
    const services = this.props.services.map((r, index) => (
      <Service 
        key={r.id} {...r}
      />
    ))
    return (
      <>
       {services} 
      </>
    )
  }
}

export default ServiceList; 
