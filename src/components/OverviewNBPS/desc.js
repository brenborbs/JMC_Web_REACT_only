import React from 'react';

const Consulting = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>New-building Guarantee Claims</h1>
        </div>
        <div className="title-underline"></div>
      </div>

  <div id="v-serv-desc"  >
    <section id="v-serv-info" >
      <div className="v-serv-center"  >
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Ballast Tanks</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Cargo Holds</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Cargo Oil Tanks</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Fresh Water Tanks</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Aft and Fore Peak Tanks</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">We will make an extensive survey of all accessible areas of the vessel.</p>
    <p className="v-serv-p">The more areas, the better is the basis for a suitable compensation. Based on the survey, we compile a comprehensive report and a realistic calculation of the rectification cost.</p>
    <p className="v-serv-p">With the report and the calculation in hand, the client is well equipped to make a guarantee claim towards the new-building shipyard.</p>
    <p className="v-serv-p">Advantage of the service is the potential compensation in comparison to the normal few drums of paint. Moreover, the report also serves as a tool for the superintendent, to give him a detailed picture of the vessel paint condition, to support his considerations for remedial action.</p>
    </section>
    
      </div>
    </div>
  );
};

export default Consulting;