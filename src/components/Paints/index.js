import React from "react";
import PaintMain from "./paintMain";
import Banner from "./banner";
import Featured from "./featured";
import NewsBar from "../../Common/newsBar";

const Paint = () => {
  return (
    <div>
      <Banner />
      <NewsBar />
      <Featured />
      <PaintMain />
    </div>
  );
};

export default Paint;
