import React from 'react';

const Dry_Dock = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>New Buildings</h1>
        </div>
        <div className="title-underline"></div>
      </div>

  <div id="v-serv-desc"  >
    <section id="v-serv-info" >
      <div className="v-serv-center"  >
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Development, review and negotiation of newbuilding contracts and specification</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Plans and drawings approval</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Makers evaluation and selection</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Attendance to model tests and manufacturers’ premises</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Site office set-up and ship construction supervision</p>
        </div>
        <div className="v-serv-item">
          <i className="fa fa-check"></i>
          <p>Final assessment, post-delivery guarantee and claims settlement</p>
        </div>
      </div>
    </section>
    <section id="v-serv-map">
    <p className="v-serv-p">With our strong communication and relationships with many
    shipbuilders worldwide. Having a dedicated team of highly trained and experienced professionals enables us to handle various types of newbuilding, drydockings and conversion projects at your disposal and assist you from pre-contract negotiations to vessel delivery and beyond, <strong>full service guarantee.</strong></p>
    <p className="v-serv-p">It is very well known that according to studies 80% of coating failure usually occurs due to poor surface preparation. This happens during construction stage of the vessel which will likely affect the ship during her entire life in service. To avoid this pitfall, we can help you with our experties in this field and ensure getting your vessels get the proper standards from the shipyards.</p> 
    </section>
    
  </div>
    </div>
  );
};

export default Dry_Dock;