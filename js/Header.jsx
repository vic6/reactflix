import React from "react";
import { Link } from "react-router-dom";
import { shape } from "prop-types";

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTerm}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">VicsFlix</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.propTypes = {
  handleSearchTerm: shape.isRequired,
  showSearch: shape.isRequired,
  searchTerm: shape.isRequired,
};

Header.defaultProps = {
  showSearch: false,
};

export default Header;
