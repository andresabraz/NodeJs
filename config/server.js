var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

//Faz autoload dos arquivos da rota
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app);

module.exports = app;