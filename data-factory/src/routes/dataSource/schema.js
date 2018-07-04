module.exports = {
  path: 'schema',
  getComponent(nextState, cb) {
    cb(null, require('../../containers/DataSource/SchemaPage').default);
  }
};
