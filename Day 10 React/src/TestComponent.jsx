import React, { useState } from "react";
import Comp1 from "./Comp1.jsx";
import Comp2 from "./Comp2.jsx";
import Comp3 from "./Comp3.jsx";
import Comp4 from "./Comp4.jsx";
import Comp5 from "./Comp5.jsx";

const TestComponent = () => {
  const [data, setData] = useState("Me TestData......");

  return (
    <div>
      Me TestComponent.jsx hu
      <Comp1 data={data} />
    </div>
  );
};

export default TestComponent;
