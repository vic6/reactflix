import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "I love ice cream",
    };
  }

  // Public class field, this is a stage 2 proposal
  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input
            onChange={this.handleSearchTerm}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>

        <div>
          {preload.shows.map(show => (
            <ShowCard key={show.imdbID} show={show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
