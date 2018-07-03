module.exports = {
  childRoutes: [{
    path: '/',
    component: require('../containers/DataSource/DataTreePage').default,
    indexRoute: { onEnter: (nextState, replace) => replace('/data-source/data-tree') },
    childRoutes: [
      require('./dataSource/Index')
    ]
  }]
};
