import React from 'react'
import NavLink from './NavLink'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState() {
    return {
      inputUserName: '',
      inputRepoName: '',
    }
  },

  handleSubmit(event) {
    event.preventDefault()
    const userName = this.state.inputUserName
    const repo = this.state.inputRepoName
    const path = `/repos/${userName}/${repo}` // NOTE: literal syntax using backticks - can this be replaced with a normal string?
    this.context.router.push(path)
  },

  handleUserNameUpdate(event) {
    this.setState({
      inputUserName: event.target.value,
    })
  },

  handleRepoNameUpdate(event) {
    this.setState({
      inputRepoName: event.target.value,
    })
  },

  render() {
    return (
      <div>
        <ul>
          <li><NavLink to='/repos/johnhilts/weatherinfo'>Weather Info</NavLink></li>
          <li><NavLink to='/repos/jhilts@lampsplus.com/react-for-beginners'>React for Beginners</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" value={this.state.inputUserName} onChange={this.handleUserNameUpdate} /> / {' '}
                <input type="text" placeholder="repo" value={this.state.inputRepoName} onChange={this.handleRepoNameUpdate} />{' '}
                  <button type="submit">Go</button>
                </form>
              </li>
            </ul>

            <div>
              {this.props.children}
            </div>

          </div>
        )
      }
    })
