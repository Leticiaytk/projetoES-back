var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors')
var index = require('./routes/index');
var users = require('./routes/users');
var usuarios = require('./routes/usuarios');
var login = require('./routes/login');
var relatorio = require('./routes/relatorio');

var app = express();

// Banco de dados 
var mysql = require('mysql');
pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root1',
  database: 'EngSof'
});

app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  // Qm pode acessar esta API
  res.header('Access-Control-Allow-Origin', '*');
  // O que vai aceitar de cabeçalho
  res.header('Access-Control-Allow-Header', 
  'Content-type, Origin, X-Requested-With, Accept, Authorization');

  if(req.method == "OPTIONS"){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
      return res.status(200).send({})
  };

  next();
})
app.use('/', index);
app.use('/users', users);
app.use('/usuarios', usuarios);
app.use('/login', login); 

// Erro 404
app.use(function (req, res, next) {
  var err = new Error('Not Found nada');
  err.status = 404;
 // next(err);
});

// error 
app.use(function (err, req, res, next) {
  // seta os locais
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
