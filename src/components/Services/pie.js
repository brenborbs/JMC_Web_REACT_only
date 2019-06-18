import React from 'react';
import PieChart from '../../Resources/img/pie.png';
import Chart from '../../Resources/img/chart.png';

const Pie = () => {
  return (
    <div className="exp-section_services" >
  
  <div className="title">
      <div className="title-text">
        <h1>Actual Cases Has Shown</h1>
      </div>
      <div className="title-underline"></div>
    </div>
    
    <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Cause for Paint Defects - Why?</h2>
          <p className="lead">According to studies and research in corrosion and having witnessed first hand, 85% of paint defects found on-board the ship are caused by POOR surface preparation leaving the 15% to 'Other' causes. Having this in mind, our priority would always start at surface preparation and ends until the last coating has been applied. Ensuring a concrete foundation for corrosion control.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" src={PieChart} alt="pie"/>
        </div>
      </div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">Proper Surface Preparation Matters</h2>
    <p className="lead">Based on our experience, while using handtools may be low cost, however as shown in the graph, we could see that the surface preparation result is rather poor which leads to high probability of coating failure as the ship ages. On the other hand, surface preparation through different blasting methods are more efficient which lessens the probability of an early coating failure on the ship areas.</p>
  </div>
  <div className="col-md-5 order-md-1">
    <img className="featurette-image img-fluid mx-auto" src={Chart} alt="chart"/>
  </div>
</div>

</div>
  );
};

export default Pie;