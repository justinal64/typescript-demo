function addTS(x: number, y: number) {
  // show what declaring the type gives you

  return x + y;
}

function addJS(x, y) {
  // what does autocomplete look like in plain javascript
  return x + y;
}

export { addTS, addJS };
