import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  menus: PropTypes.array,
  fetchMenu: PropTypes.func,
};

const contextTypes = {
  router: PropTypes.object,
};

const childContextTypes = {
  menus: PropTypes.array
}

class App extends Component {

  getChildContext() {
    const { menus } = this.props;
    return {
      menus
    }
  }
  componentWillMount() {
    const { fetchMenu } = this.props;
    fetchMenu && fetchMenu();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="page">
        {children}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.contextTypes = contextTypes;
App.childContextTypes = childContextTypes;

export default App;

