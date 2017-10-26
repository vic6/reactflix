import React from "react";
import { Link } from "react-router-dom";

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

Header.defaultProps = {
  showSearch: false,
};
export default Header;
