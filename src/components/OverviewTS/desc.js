import React from 'react';

const Tank_Surv = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>Actual Breakdown Assestment</h1>
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
          <p>Fresh Water Tanks</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Engine Room Tanks</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Fore and Aft Peak Tanks</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">As your ship begins to age, existing paint breakdown in the tanks will need to be monitored and checked, thus giving you information on the need and extent of breakdown, for  considerations as to remedial action.</p>
    <p className="v-serv-p">In JMC, we will do the tank survey prior any class surveys and provide you with an extensive report on the coating breakdown and rectification suggestions.
    </p>
    <p className="v-serv-p">If the tank condition of the tanks are "POOR" as per IMO tank guidelines, we will help you in supervising the tank repairs with the contractors, ensuring the necessary and proper rectification with the budget in mind.</p> 
    </section>
  </div>
    </div>
  );
};

export default Tank_Surv;