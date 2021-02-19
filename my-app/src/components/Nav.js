/** Nav component is the navigation for the links */
import React from "react";
import { Link } from "react-router-dom";

/**Link to each page (cats,dogs,computers) */
const Nav = ({ props }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/computers">Computers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
