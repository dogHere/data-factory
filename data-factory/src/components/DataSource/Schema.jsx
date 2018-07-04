import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {

}

const defaultProps = {}

class Schema extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps, nextState) {
  }

  render() {
    return (
      <div>
        <h1>Schema</h1>
      </div>
    )
  }
}

Schema.propTypes = propTypes;
Schema.defaultProps = defaultProps;

export default Schema;
