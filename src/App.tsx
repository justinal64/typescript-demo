import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddPage } from "./pages/AddPage";
import { MathPage } from "./pages/MathPage";
import { x, y, z } from "./utils/variables";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/math">Math</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            {/* Why is this failing? */}
            <AddPage x={x} y={y} z={z} />
          </Route>
          <Route path="/math">
            <MathPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
