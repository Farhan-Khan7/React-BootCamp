import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data }) => {
 console.log("Comp1 data:", data);
  return (
    <div>
      <h1>Inside Component 1</h1>
      <Comp2 />
    </div>
  );
};

export default Comp1;
