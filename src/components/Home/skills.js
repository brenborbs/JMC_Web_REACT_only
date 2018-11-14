import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-container">
        <article className="skills-item">
          <i className="fa fa-anchor"></i>
          <h1>Drydockings</h1>
          <p>We will always do our utmost to ensure the protection of your assets in the most suitable way, by continous foresight.</p>
        </article>
        <article className="skills-item">
          <i className="fa fa-file-text-o"></i>
          <h1>Reporting</h1>
          <p>As marine corrosion experts, we will give you a clear and precise report regarding the condition of your assets including proper advice and guidance for your crew.</p>
        </article>
        <article className="skills-item">
          <i className="fa fa-certificate"></i>
          <h1>Inspectors</h1>
          <p>Our staff is either FROSIO or NACE certified and have a great deal of experience solving corrosion problems in the marine industry.</p>
        </article>
        <article className="skills-item">
          <i className="fa fa-globe"></i>
          <h1>Global</h1>
          <p>We have a great deal of experience working in a multitude of locations and shipyards all over the world.</p>
        </article>
      </div>
  
    </section>
  );
};

export default Skills;