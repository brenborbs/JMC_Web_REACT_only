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
    <p className="v-serv-p">Staring from design to steel cutting, blocks stage to launching, after-launching to final outfitting and then finally, towards sea-trial and delivery. We can help you with our expertise in this field and ensure getting your vessels get the proper standards from the shipyards.</p> 
    </section>
    
  </div>
    </div>
  );
};

export default Dry_Dock;