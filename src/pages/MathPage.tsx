import React from "react";
import { mathTS } from "../components/calculatorTS";
import { mathJS } from "../components/calculatorJS";
import { x, y, z } from "../utils/variables";

function MathPage() {
  // show what autocomplete looks like.
  // what happens when you use a string for a param?

  return (
    <div className="calculator">
      <div className="calculatorts">
        {/* Show autocomplete for operator */}
        {/* What if we pass z */}
        <h1>Typescript</h1>
        {x} + {y} = {mathTS(x, y, "add")}
      </div>
      <div className="calculatorjs">
        <h1>Javascript</h1>
        {x} + {z} = {mathJS(x, z, "add")}
      </div>
    </div>
  );
}

export { MathPage };
