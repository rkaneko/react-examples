var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.config');

var app = new express();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));
// json config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function sendJson(req, res, file) {
  res.contentType('application/json');
  res.sendFile(path.join(__dirname, 'api-mock', file));
}

// sample
app.get('/apis/foo', function(req, res) {
  sendJson(req, res, 'foo.json');
})

app.post('/apis/foo', function(req, res) {
  var bar = req.body.bar;
  console.log(bar);

  sendJson(req, res, 'foo.json');
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
