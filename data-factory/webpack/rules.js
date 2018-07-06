const extractSass = require('./extractSass');

module.exports = [
  {
    test: /\.jsx?$/,
    use: [
      'babel-loader?babelrc'
    ],
    exclude: /node_modules/
  }, {
    test: /\.scss$/,
    loader: extractSass.extract({
      use: [{
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }],
      fallback: 'style-loader'
    })
  }, {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
    ]
  },
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  },
  {
    test: /\.(jpg|png)$/,
    loader: 'url-loader'
  }, {
    test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
    loader: 'url-loader?limit=1&hash=sha512&digest=hex&size=16&name=resources/[hash].[ext]'
  }
];
