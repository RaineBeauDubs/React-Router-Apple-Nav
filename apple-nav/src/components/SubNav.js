import React from 'react';
import NavWrapper from './NavWrapper';

class SubNav extends React.Component {
  constructor() {
    super();
    this.state = {
      navItem: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.name;
    this.setState({
      navItem: id
    });
  }

  render() {
    return (
      <div>
        <NavWrapper />
        <div>
          <h2>{this.state.navItem}</h2>
        </div>
      </div>
    )
  }
}


export default SubNav;