import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to='/repos/johnhilts/weatherinfo'>Weather Info</NavLink></li>
          <li><NavLink to='/repos/jhilts@lampsplus.com/react-for-beginners'>React for Beginners</NavLink></li>
        </ul>

        <div>
          {this.props.children}
        </div>

      </div>
    )
  }
})
