import React from 'react';
import Video from './video';


const In_Service = () => {
  return (
    <div className="topic_section_style" 
    style={{ paddingTop: '5px' }} 
    >
      <div className="title" >
      <div className="title-text" >
          <h1>Solving In-Service corrosion</h1>
        </div>
        <div className="title-underline"></div>
      </div>

    <div className="container-fluid" >
      <div className="row" >
          <div className="col-sm-6">
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Hydro-Jetting</p>
              </div>
            </div>
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Exposed Decks Rectifications</p>
              </div>
            </div>
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Inside Tank Treatment</p>
              </div>
            </div>
            <div className="ptech-center" >
              <div className="ptech-item" >
                <i className="fa fa-check"></i>
                <p>Engine Room Painting</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="p-video">
              <Video />
            </div>
          </div>
      </div>
    </div>

    <section id="ptech-map" >
    <p className="p-ptech" >Even when your ship is going to her next Port call, we can provide a team of experienced repair personell to assist you in treatment of corrosion on areas that are heavily corroded and cannot be done by your crew.</p>
    <p>With the possibility of a Port survey during the arrival of your ship prior cargo loading, it is therefore very important to treat the areas properly. Our professional team with years of experienced will ensure that the correct surface preparation and paint application will be applied on the corroded areas. Thus eliminating the constant worry in your part for failed Port surveys and additional losses on cargo delays.</p> 
    </section>
  
    
    
    </div> 

  );
};

export default In_Service;

