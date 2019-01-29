import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      topNavItems: []
    };
  }

  render() {
    return (
      <div>
        <Link to={`/${this.props.navItem}`}>
          <h2>{this.props.navItem}</h2>
        </Link>
      </div>
    )
  }
}

export default Nav;