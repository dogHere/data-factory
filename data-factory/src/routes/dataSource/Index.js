module.exports = {
  childRoutes: [{
    path: 'data-source',
    childRoutes: [
      require('./dataTree')
    ]
  }]
};
