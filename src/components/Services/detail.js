import React, { Component } from 'react';

import ServiceList from './serviceList';
import PhotQ from '../../Resources/img/dd.JPG';
import PhotW from '../../Resources/img/dft.JPG';
import PhotE from '../../Resources/img/bar.JPG';
import PhotR from '../../Resources/img/tank1.JPG';
import PhotT from '../../Resources/img/fore.JPG';
import PhotY from '../../Resources/img/expd.JPG';
import PhotX from '../../Resources/img/fdeck.JPG';

 class Detail extends Component {
   
    state = {
      services : [
        {
          id: 0,
          img: PhotQ,
          title: "Dry Dockings",
          desc: "On all shipyards globally",
          url: '/services/overview_drydockings'
          
        },
        {
         id: 1,
         img: PhotW,
         title: "Pre-Docking Survey",
         desc: "On board each ship",
         url: '/services/overview_preSurveys'
       },
       {
         id: 2,
         img: PhotE,
         title: "Paint Technology",
         desc: "On each ship/office",
         url: '/services/overview_paintTechnology'
       },
       {
         id: 3,
         img: PhotR,
         title: "Tank Surveys",
         desc: "On each vessel",
         url: '/services/overview_tankSurveys'
       },
       {
         id: 4,
         img: PhotT,
         title: "New Buildings",
         desc: "On all shipyards globally",
         url : '/services/overview_newBuildings',
       },
       {
         id: 5,
         img: PhotY,
         title: "Consulting",
         desc: "On each ship/office",
         url: '/services/overview_consulting'
       },
       {
        id: 6,
        img: PhotX,
        title: "In-Service Repair",
        desc: "On board your ship",
        url: '/services/overview_in-service'
      }
      ]
    }
   
   

  render() {
    const { services } = this.state;
    return (
      <>
        <section className="portfolio">
        <div className="title">
        <h1 className="title-text">Explore Our Services</h1>
        <div className="title-underline"></div>
        </div>
        <div className="portfolio-center">
          <ServiceList 
            services={services}
          />
        </div>
        </section>
      </>

    )
  }
}

export default Detail;


