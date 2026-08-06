import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ data }) => {
 
  return (
    <div>
      <h1>Inside Component 2</h1>
      <Comp3 />
    </div>
  );
};

export default Comp2;
