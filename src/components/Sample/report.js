import React from 'react';
import Slider from 'react-slick';
import Cover from '../../Resources/img/ReportCover.png';
import Intro from '../../Resources/img/intro2.png'; //
import Scope from '../../Resources/img/scope.png'; //
import Eval from '../../Resources/img/detail.png'; //
import Photo from '../../Resources/img/photos.png'; // change
import Prog from '../../Resources/img/progress.png'; // change
import Ref from '../../Resources/img/reference.png'; // reference
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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // autoplay: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  const generateSample = () => (
    sample ?
    sample.map(( item , i) => (
      <div key={i} >
        <div className="reports-text" >
              <h3 style={{ paddingBottom: '5px', textTransform: 'uppercase', fontSize: '20px' }} >{item.page}</h3>
              <div style={{ padding: '0px 35px 0px 35px' }} >
                <img src={item.img} alt="sponsor-img"/>
              </div>
        </div>
      </div>
    ))
    : null
  )

  return (
    <div className="projects" style={{ backgroundColor: '#b5c2b7' }} >
    <div className="title">
        <div className="title-text">
          <h1 style={{ paddingTop: '2em' }} >JMC Sample Report</h1>
        </div>
        <div className="title-underline"></div>
        <p style={{ textAlign:'center' , paddingTop: '1.5em' }}><strong>JMC Limited</strong> report that will serve as the guideline during initial owner/yard scope of work discussions.</p><p style={{ textAlign:'center'}}>Our clients will receive similar report scope during the project.</p>
            <div className="report-container">
              <Slider {...settings} >
              {generateSample()}
              </Slider>
                  
            </div>
      </div>
</div>
  );
};

export default Report;
