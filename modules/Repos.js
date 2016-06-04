import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/repos/johnhilts/weatherinfo'>Weather Info</Link></li>
          <li><Link to='/repos/jhilts@lampsplus.com/react-for-beginners'>React for Beginners</Link></li>
        </ul>
      </div>
    )
  }
})
