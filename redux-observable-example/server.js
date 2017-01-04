'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');

const app = new express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'src')));
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
});

app.post('/apis/foo', function(req, res) {
  const bar = req.body.bar;
  console.log(bar);

  sendJson(req, res, 'foo.json');
});

app.get('/apis/users', function(req, res) {
  sendJson(req, res, 'users.json');
});

app.get(/^(?!\/apis\/).*$/, function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
