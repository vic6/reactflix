import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";

import preload from "../data.json";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
      <Route
        path="/details/:id"
        component={props => (
          <Details
            show={preload.shows.find(
              show => props.match.params.id === show.imdbID,
            )}
            {...props}
          />
        )}
      />
    </div>
  </BrowserRouter>
);

App.propTypes = {
  match: PropTypes.string.isRequired,
};

export default App;
