import PropTypes from "prop-types";
import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
  // Public class field, this is a stage 2 proposal, include in babelrc
  // "plugins": ["babel-plugin-transform-class-properties"]
  state = {
    searchTerm: "",
  };

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  // Otherwise you can do it this way
  // example without public class field
  // constructor(props) {
  //   super(props);
  //   // alternate way of binding this
  //   // this.handleSearchTerm = this.handleSearchTerm.bind(this);
  //   this.state = {
  //     searchTerm: "I love ice cream",
  //   };
  // }
  // handleSearchTerm(event) {
  //   this.setState(event.target.value)
  // }

  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTerm={this.handleSearchTerm}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map((show, index) => (
              <ShowCard key={show.imdbID} show={show} id={index} />
            ))}
        </div>
      </div>
    );
  }
}

// Not really doing anything, just gets rid of linter error, it's not a string
Search.propTypes = {
  shows: PropTypes.string.isRequired,
};
export default Search;
