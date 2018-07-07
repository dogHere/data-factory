module.exports = {
  childRoutes: [{
    path: '/',
    indexRoute: { onEnter: (nextState, replace) => replace('/data-source/data-tree') },
    childRoutes: [
      require('./dataSource/Index')
    ]
  }]
};
