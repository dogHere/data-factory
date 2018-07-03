import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {}

const defaultProps = {}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}

Login.propTypes = propTypes

Login.defaultProps = defaultProps

export default Login
