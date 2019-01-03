import React from "react";
// import { Link } from 'react-router-dom';

const Newbuild = () => {
  return (
    <section className="capability" style={{ marginTop: "3em" }}>
      <div
        className="container"
        style={{ paddingLeft: "3em", letterSpacing: "2px" }}
      >
        <div className="row">
          <div className="col">
            <h2>Newbuildings Projects</h2>
            <p>
              With our strong communication and relationships with many
              shipbuilders worldwide. Having a dedicated team of highly trained
              and experienced professionals enables us to handle various types
              of newbuilding, drydockings and conversion projects at your
              disposal and assist you from pre-contract negotiations to vessel
              delivery and beyond, <strong>full service guarantee.</strong></p>
          </div>
        </div>

        <h4>JMC's Newbuilding Project Services</h4>
        <div>
          <div>
            <ul>
              <li>
                Development, review and negotiation of newbuilding contracts and
                specification
              </li>
              <li>Plans and drawings approval</li>
              <li>Makers evaluation and selection</li>
              <li>Attendance to model tests and manufacturers’ premises</li>
              <li>Site office set-up and ship construction supervision</li>
              <li>
                Final assessment, post-delivery guarantee and claims settlement
              </li>
            </ul>
          </div>

          <div className="">
            <p>
              Since the start at JMC, we have been offering the aforementioned
              corrosion management services for the following Ship Owners.
            </p>
            <div className="table-responsive-md">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>No.of Ships</th>
                    <th>Ship Type</th>
                    <th>Yard</th>
                    <th>Owner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2018</td>
                    <td>1</td>
                    <td>Jack-Up Vessel</td>
                    <td>Damen Ship Repair France</td>
                    <td>A2Sea</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>1</td>
                    <td>Cruise Liner</td>
                    <td>Chantier Navale de Marseille</td>
                    <td>Hapag Lloyd Cruises</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>1</td>
                    <td>Cruise Liner</td>
                    <td>Drydocks World, Dubai</td>
                    <td>Carnival Maritime</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>5</td>
                    <td>Cruise Liner</td>
                    <td>Chantier Navale de Marseille</td>
                    <td>Carnival Maritime</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>1</td>
                    <td>Cruise Liner</td>
                    <td>Chantier Navale de Marseille</td>
                    <td>Carnival Maritime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Newbuild;
