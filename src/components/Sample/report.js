import React from 'react';
import Cover from '../../Resources/img/ReportCover.png';
import Intro from '../../Resources/img/intro2.png'; //
import Scope from '../../Resources/img/scope.png'; //
import Eval from '../../Resources/img/detail.png'; //
import Photo from '../../Resources/img/photos.png';
import Prog from '../../Resources/img/progress.png';
import Ref from '../../Resources/img/reference.png';
import Sched from '../../Resources/img/sched.png'; //
import Conc from '../../Resources/img/conclusion.png'; //
 
const Report = () => {

  const sample = [
    {
      img: Cover,
      page: 'Cover Page',
    },
    {
      img: Intro,
      page: 'Introduction',
    },
    {
      img: Scope,
      page: 'Scope',
    },
    {
      img: Eval,
      page: 'Evaluation',
    },
    {
      img: Photo,
      page: 'Photos',
    },
    {
      img: Prog,
      page: 'Progress',
    },
    {
      img: Ref,
      page: 'Reference',
    },
    {
      img: Sched,
      page: 'Schedule',
    },
    {
      img: Conc,
      page: 'Conclusion',
    }
  ]

  const generateSample = () => (
    sample.map(( item , i) => (
      <div key={i} >
          <article className="p-projects-item">
            <div style={{ textAlign: 'center' , color: 'white', textDecoration: 'underline', textTransform: 'uppercase' }} >
            <h4>{item.page}</h4>
          </div>
          <img src={item.img} alt="One" style={{ width: '100%' }} />
        </article>
      </div>
    ))
  )

  return (
    <div className="sample_section_style" >
    <div className="title">
        <div className="title-text">
          <h1 style={{ color: 'white' }} >JMC Sample Report</h1>
        </div>
        <div className="title-underline"></div>
            <div className="projects-container" style={{ paddingTop: '3em' }}  >
                  {generateSample()}
            </div>
      </div>
</div>
  );
};

export default Report;
