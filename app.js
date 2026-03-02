const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongodb = require('./db/mongo');
const cors = require('cors');

// Import Swagger UI and the generated Swagger specification
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');


const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api/index.routes');

const app = express();

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Initialize MongoDB connection
mongodb.initClientDbConnection();

app.use(cors({
  exposedHeaders: ['Content-Type', 'Authorization'],
  origin: '*'
}))



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch and forward to error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message, error: err });
});

// error handler
//app.use(function(err, req, res, next) {
//  // set locals, only providing error in development
//  res.locals.message = "Test";
//  res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
//  res.status(err.status || 500);
//  res.render('error', { message: err.message });
//});

module.exports = app;
