module.exports = {
  path: 'data-tree',
  getComponent(nextState, cb) {
    cb(null, require('../../containers/DataSource/DataTreePage').default);
  }
};
