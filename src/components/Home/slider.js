import React from 'react';
import HomeOne from '../../Resources/img/background.jpg';
import HomeTwo from '../../Resources/img/dda.JPG';
import HomeThree from '../../Resources/img/carniv.JPG';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const HomeSlider = () => {

  const slides = [
    {
      img: HomeOne,
      text: 'JMC-Limited',
      textUnderline: 'Corrosion Experts 24/7',
      linkTo: '/about_us',
      linkTitle: 'Explore'
    },
    {
      img: HomeTwo,
      text: 'JMC-Limited',
      textUnderline: 'Corrosion Experts 24/7',
      linkTo: '/services',
      linkTitle: 'Our Services'
    },
    {
      img: HomeThree,
      text: 'JMC-Limited',
      textUnderline: 'Corrosion Experts 24/7',
      linkTo: '/report',
      linkTitle: 'Sample Report'
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false
}

  const generateSlides = () => (
    slides ?
      slides.map((item, i )=> (
        <div key={i} >
            <div className="slider-banner" 
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`,
              // height: `${window.innerHeight}px`
              minHeight: '95vh'
             }}
            >
                <div className="slider-title">
                  <h1 className="slider-text">{item.text}</h1>
                  <div className="slider-underline">{item.textUnderline}</div> 
                  <div className="text-center">
                  <Link to={item.linkTo} className="btn btn-warning" >{item.linkTitle}</Link>
                  </div>
                </div>
              </div>
        </div>
      ))
    : null
  )

  return (
    <div className="slider-container">
    <Slider {...settings} >
      {generateSlides()}
    </Slider>
      
    </div>
  );
};

export default HomeSlider;