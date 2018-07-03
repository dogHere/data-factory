module.exports = {
  path: 'dashboard',
  getComponent(nextState, cb) {
    cb(null, require('../containers/Dashboard').DashboardPage);
  }
};
