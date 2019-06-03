import React  from 'react';
import Banner from './banner';
import Desc from './desc';
import Helmet from 'react-helmet';

 const OverviewSV =() => {
  
    return (
      <>
        <Helmet>
        <title>JMC Limited - Services/In-service repairs</title>
        <meta 
        name="in-service repairs" 
        content="Our expertise in corrosion control will be your In-Service guide." />
        <meta
          name="hydro-jetting, exposed decks rectification, inside tank treatment, engine room painting"
          content="Even when your ship is going to her next Port call, we can provide a team of experienced repair personell to assist you in treatment of corrosion on areas that are heavily corroded and cannot be done by your crew. With the possibility of a Port survey during the arrival of your ship prior cargo loading, it is therefore very important to treat the areas properly. Our professional team with years of experienced will ensure that the correct surface preparation and paint application will be applied on the corroded areas. Thus eliminating the constant worry in your part for failed Port surveys and additional losses on cargo delays."
        />
      </Helmet> 
        <Banner />
        <Desc />
      </>
    )
  }


export default OverviewSV;