import React from 'react';
import Slider from 'react-slick';
import Spon from '../../Resources/img/Soldalløberne.jpg';
import SponTwo from '../../Resources/img/WhiteHawks_Top_990x500_2.jpg';
import SponThree from '../../Resources/img/220px-Frederikshavn_White_Hawks_logo.png';


const Sponsor = (props) => {

  const sponsor = [
    {
      img: Spon ,
      descOne: 'We are proud to have sponsored the running t-shirts for 22 persons.',
      descTwo: ' "The proud Fusion t-shirt sponsor for a running team of 22 energetic women and men. We wish them fair weather and good legs!!!" '
    },
    {
      img: SponTwo,
      descOne: 'We are proud to have sponsored the Frederikshavn White Hawks from Danish Championship Ice Hockey League.',
      descTwo: ' "JMC Limited is delighted to support Frederikshavn White Hawks, one of the top Danish ice-hockey teams, with a sponsorship for the season 2019-2020" '
    },
    {
      img: SponThree,
      descOne: 'We are proud to have sponsored the Frederikshavn White Hawks from Danish Championship Ice Hockey League.',
      descTwo: ' "JMC Limited is delighted to support Frederikshavn White Hawks, one of the top Danish ice-hockey teams, with a sponsorship for the season 2019-2020" '
    },
  ]

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false
}

  const generateSponsor = () => (
      sponsor ?
        sponsor.map((item , i) => (
          <div key={i} >
            <div>
                <div>
                  <img src={item.img} alt="sponsor" />
                <div style={{ paddingTop: '10px' }} >
                    <p>{item.descOne}</p>
                    <p><strong>{item.descTwo}</strong></p>
                    </div>
                </div>
            </div>
          </div>
        ))
      :null
  )

  return (
    <div className="projects" style={{ backgroundColor: 'whitesmoke' }} >
  
  <div className="title">
      <div className="title-text">
        <h1>Community Sponsorships</h1>
      </div>
      
      <div className="title-underline"></div>
    </div>
    <p style={{ textAlign:'center' }} ><strong>JMC-LIMITED</strong> is also active in sponsoring local arrangements and sports clubs.</p>
    
    <div className="sponsor-container">
      <Slider {...settings} >
        {generateSponsor()}
      </Slider>
    </div>
</div>
  );
};

export default Sponsor;