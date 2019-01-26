import React from 'react';
// import { Link } from 'react-router-dom';
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
          <h1 style={{ color: 'white' }} >JMC Sample Report</h1>
        </div>
        <div className="title-underline"></div>
            
            <div className="sample_text" >
              {/* <p>A glimpse on a submitted report from a previous project. You can check below.</p> */}
            </div>
              
            <div className="projects-container" style={{ paddingTop: '3em' }}  >
        
        <article className="p-projects-item">
        <div style={{ textAlign: 'center' , color: 'white', textDecoration: 'underline', textTransform: 'uppercase' }} >
            <h4>Cover Page</h4>
          </div>
          <img src={Cover} alt="One" style={{ width: '100%' }} />
          
        </article>
        
        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white', textDecoration: 'underline', textTransform: 'uppercase' }}>
            <h4>Introduction</h4>
          </div>
          <img src={Intro} alt="Two" style={{ width: '100%' }}/>
          
        </article>
        
        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase' }}>
            <h4>Scope</h4>
          </div>
          <img src={Scope} alt="Three" style={{ width: '100%' }} />
          
        </article>
        
        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase' }}>
            <h4>Evaluation</h4>
          </div>
          <img src={Eval} alt="four" style={{ width: '100%' }} />
          
        </article>

        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase' }}>
            <h4>Photos</h4>
          </div>
          <img src={Photo} alt="five" style={{ width: '100%' }} />
          
        </article>

        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase' }}>
            <h4>Progress</h4>
          </div>
          <img src={Prog} alt="six" style={{ width: '100%' }} />
          
        </article>

        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase' }} >
            <h4>Reference</h4>
          </div>
          <img src={Ref} alt="seven" style={{ width: '100%' }} />
          
        </article>

        <article className="p-projects-item">
        <div style={{ textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase' }} >
            <h4>Schedule</h4>
          </div>
          <img src={Sched} alt="eight" style={{ width: '100%' }} />
          
        </article>

        <article className="p-projects-item">
        <div style={{textAlign: 'center', color: 'white',textDecoration: 'underline', textTransform: 'uppercase'}} >
            <h4>Conclusion</h4>
          </div>
          <img src={Conc} alt="nine" style={{ width: '100%' }} />
          
        </article>

      </div>

      {/* <div className="section-btn">
    <Link to="/contact" >Contact Us</Link>
    </div> */}
      </div>
</div>
  );
};

export default Report;
