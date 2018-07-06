import React, { Component } from 'react';
import PropTypes from 'prop-types';

const contextTypes = {
  router: PropTypes.object,
};

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page">
        {children}
      </div>
    );
  }
}

App.contextTypes = contextTypes;

export default App;

