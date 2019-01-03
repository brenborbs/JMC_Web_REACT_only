import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../Resources/img/ReportCover.png';
import Intro from '../../Resources/img/intro.png'; //
import Scope from '../../Resources/img/scope.png'; //
import Eval from '../../Resources/img/detail.png'; //
import Photo from '../../Resources/img/photos.png';
import Prog from '../../Resources/img/progress.png';
import Ref from '../../Resources/img/reference.png';
import Sched from '../../Resources/img/sched.png'; //
import Conc from '../../Resources/img/conclusion.png'; //
 
const Report = () => {
  return (
    <div className="sample_section_style" >
  
    <div className="title">
        <div className="title-text">
          <h1>JMC Sample Report</h1>
        </div>
        <div className="title-underline"></div>
            
            <div className="sample_text" >
              <p>A glimpse on a submitted report from a previous project. You can check below.</p>
            </div>
              
            <div className="projects-container">
        
        <article className="projects-item">
          <img src={Cover} alt="One" />
          <div className="img-text">
            <h1>Cover Page</h1>
          </div>
        </article>
        
        <article className="projects-item">
          <img src={Intro} alt="Two"/>
          <div className="img-text">
            <h1>Introduction</h1>
          </div>
        </article>
        
        <article className="projects-item">
          <img src={Scope} alt="Three"/>
          <div className="img-text">
            <h1>Scope</h1>
          </div>
        </article>
        
        <article className="projects-item">
          <img src={Eval} alt="four"/>
          <div className="img-text">
            <h1>Evaluation</h1>
          </div>
        </article>

        <article className="projects-item">
          <img src={Photo} alt="five"/>
          <div className="img-text">
            <h1>Photos</h1>
          </div>
        </article>

        <article className="projects-item">
          <img src={Prog} alt="six"/>
          <div className="img-text">
            <h1>Progress</h1>
          </div>
        </article>

        <article className="projects-item">
          <img src={Ref} alt="seven"/>
          <div className="img-text">
            <h1>Reference</h1>
          </div>
        </article>

        <article className="projects-item">
          <img src={Sched} alt="eight"/>
          <div className="img-text">
            <h1>Schedule</h1>
          </div>
        </article>

        <article className="projects-item">
          <img src={Conc} alt="nine"/>
          <div className="img-text">
            <h1>Conclusion</h1>
          </div>
        </article>

      </div>

      <div className="section-btn">
    <Link to="/contact" >Contact Us</Link>
    </div>
      </div>
</div>
  );
};

export default Report;
