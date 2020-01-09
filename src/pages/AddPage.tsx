import React from "react";
import { addJS, addTS } from "../components/add";

interface Props {
  x: number;
  y: number;
  z?: string;
}

function AddPage(props: Props) {
  // show what autocomplete looks like.
  // what happens when you use a string for a param?
  const { x, y, z } = props;
  return (
    <div>
      <div>
        Typescript: {x} + {y} = {addTS(x, y)}
      </div>
      <div>
        Javascript: {x} + {z} = {addJS(x, z)}
      </div>
    </div>
  );
}

export { AddPage };
