import React from 'react'
import NavLink from './NavLink'
import {IndexLink} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1><IndexLink to="/" activeClassName="active">React Router Tutorial</IndexLink></h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children}

        <div>
          <NavLink to="/" onlyActiveOnIndex={true}>Go Back Home</NavLink>
        </div>

      </div>
    )
  }
})
