import React from "react";
import SCVideo from "./steelCut";
import JWVideo from "./jetwash";

const Media = () => {
  return (
    <section className="media-background">
      <div className="media-container">
        <article className="media-item">
          <SCVideo />
          <div style={{ color: "white" }}>
            <p>
              <strong>Video courtesy of Orskov yard</strong>
            </p>
            <p>
              JMC limited has won a contract to support Orskov Yard with
              construction supervision of their new floating dock in Turkey.
            </p>
          </div>
        </article>
        <article className="media-item">
          <JWVideo />
          <div style={{ color: "white" }}>
            <p>
              <strong>Surface Treatment</strong>
            </p>
            <p>
              A great way to remove the silicone release from a temporary access
              closing plate, before building up the coating system with primer
              and a new silicone.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Media;
