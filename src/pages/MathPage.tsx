import React from "react";
import { mathTS } from "../components/calculatorTS";
import { mathJS } from "../components/calculatorJS";
import { x, y, z } from "../utils/variables";

function MathPage() {
  // show what autocomplete looks like.
  // what happens when you use a string for a param?

  return (
    <div>
      {/* Show autocomplete for operator */}
      <div>{mathTS(x, y, "add")}</div>
      <div>{mathJS(x, z, "add")}</div>
    </div>
  );
}

export { MathPage };
