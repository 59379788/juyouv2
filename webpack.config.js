module.exports = {
  entry : [
    //'webpack-dev-server/client?http://0.0.0.0:8080',
    ///'./node_modules/jquery/dist/jquery',
    //'./node_modules/bootstrap/dist/css/bootstrap.min.css',
    __dirname + '/app'
  ],
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
      //加载器配置
      loaders: [
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
          { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
          //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
          { test: /\.html$/,loader: 'raw'}
      ]
  },

  devServer: {
    //contentBase:'./build/index.html',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
    // ,
    // proxy: {
    //   "*": "http://localhost:9000"
    // }
  }

};
