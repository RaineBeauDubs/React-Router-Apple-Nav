import React from 'react';
import Nav from './Nav';
import data from '../data';

class NavWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        {this.state.data.map(navItem => (
          <Nav 
            key={navItem.name}
            navItem={navItem.name}
          />
        ))}
      </div>
    )
  }
}

export default NavWrapper;